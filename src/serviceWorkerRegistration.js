// ==========================================================================
// Service Worker Registration for Offline Portfolio Experience
// Gated to production builds to prevent dev server interference & HMR socket errors
// ==========================================================================

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log(
            '[Portfolio ServiceWorker] Successfully registered. Scope:',
            registration.scope
          );

          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log(
                    '[Portfolio ServiceWorker] New content is available and will be used when all tabs are closed.'
                  );
                  if (config && config.onUpdate) {
                    config.onUpdate(registration);
                  }
                } else {
                  console.log(
                    '[Portfolio ServiceWorker] Content is cached for offline use!'
                  );
                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          };
        })
        .catch((error) => {
          console.warn(
            '[Portfolio ServiceWorker] Error during registration:',
            error
          );
        });
    });
  } else if ('serviceWorker' in navigator) {
    // In local development (npm start), automatically clean up any existing service worker
    // to avoid dev socket errors, webpack hot-update interference, and stale code.
    unregister();
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister().then((unregistered) => {
          if (unregistered) {
            console.log('[Portfolio ServiceWorker] Unregistered service worker in development mode.');
          }
        });
      }
    }).catch((error) => {
      console.error('[Portfolio ServiceWorker] Unregister error:', error);
    });

    // Also clear any cached assets during development to avoid HMR / stale errors
    if ('caches' in window) {
      caches.keys().then((names) => {
        for (let name of names) {
          caches.delete(name);
        }
      }).catch(() => {});
    }
  }
}

