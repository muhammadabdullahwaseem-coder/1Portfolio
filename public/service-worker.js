/* ==========================================================================
   Service Worker for Muhammad Abdullah Waseem Portfolio
   Offline-First Caching Strategy & PWA Support
   ========================================================================== */

const CACHE_VERSION = 'v1.0.1';
const STATIC_CACHE_NAME = `abdullah-portfolio-static-${CACHE_VERSION}`;
const RUNTIME_CACHE_NAME = `abdullah-portfolio-runtime-${CACHE_VERSION}`;

// Core application shell assets pre-cached immediately upon installation
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/favicon.ico',
  '/blackhole-poster.webp'
];

// Install Event: pre-cache static application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS).catch((err) => {
          console.warn('[ServiceWorker] Pre-cache partial warning:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: clean up deprecated or previous version caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE_NAME &&
              cacheName !== RUNTIME_CACHE_NAME
            ) {
              console.log('[ServiceWorker] Removing obsolete cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper to determine if a request should be cached
function isCacheable(request, response) {
  if (!response || response.status !== 200) {
    return false;
  }
  // Allow basic (same-origin) and cors / opaque (Google Fonts, CDN icons)
  if (response.type !== 'basic' && response.type !== 'cors' && response.type !== 'opaque') {
    return false;
  }
  return true;
}

// Fetch Event: handle offline-first and stale-while-revalidate caching
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip non-http/https schemes (e.g. chrome-extension://)
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) {
    return;
  }

  // Bypass Webpack Dev Server, HMR, WebSockets, and hot-updates
  const url = new URL(request.url);
  if (
    url.hostname === 'localhost' ||
    url.hostname === '127.0.0.1' ||
    url.pathname.includes('hot-update') ||
    url.pathname.includes('/ws') ||
    url.pathname.includes('sockjs-node') ||
    url.pathname.startsWith('/__webpack_dev_server__')
  ) {
    return;
  }

  // Video and partial range requests (e.g. blackhole.webm):
  // Let the browser handle video natively through its media stack.
  if (
    request.headers.get('range') ||
    request.destination === 'video' ||
    request.destination === 'audio' ||
    url.pathname.endsWith('.webm') ||
    url.pathname.endsWith('.mp4')
  ) {
    return;
  }

  // Handle SPA navigation requests (e.g. /project, /services, /about, /resume)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (isCacheable(request, networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(RUNTIME_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // If offline during navigation, serve cached HTML shell for React Router
          const cachedNavigate = await caches.match(request);
          if (cachedNavigate) return cachedNavigate;
          const cachedIndex = await caches.match('/index.html');
          if (cachedIndex) return cachedIndex;
          const cachedRoot = await caches.match('/');
          if (cachedRoot) return cachedRoot;
          return new Response('<!DOCTYPE html><html><body><h1>Offline</h1><p>Portfolio is offline.</p></body></html>', {
            status: 503,
            headers: { 'Content-Type': 'text/html' }
          });
        })
    );
    return;
  }

  // Static Assets (JS, CSS, Images, Fonts, PDFs):
  // Stale-While-Revalidate: return cache immediately if available, update in background
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (isCacheable(request, networkResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(RUNTIME_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });

      if (cachedResponse) {
        // Run fetch in background to refresh runtime cache silently
        fetchPromise.catch(() => {});
        return cachedResponse;
      }

      // No cache match: must wait for network fetch
      return fetchPromise.catch(() => {
        // Fallback to cache match if available
        return caches.match(request);
      });
    })
  );
});
