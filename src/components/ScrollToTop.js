import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    let observer = null;

    // Initialize fluid scroll reveal observer for current page content
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      const targets = document.querySelectorAll(
        ".home-header, .home-visual-col, .philosophy-card, .project-card, .services-card-wrapper, .service-card, .contact-card, .skill-badge-card, .section-header-block, .resume-card, .card-section, .about-card-col"
      );

      targets.forEach((el, index) => {
        el.classList.add("scroll-reveal");
        el.style.setProperty("--reveal-index", (index % 6) + 1);
        observer.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
