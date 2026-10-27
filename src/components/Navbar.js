import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Services", path: "/services" },
  { label: "Resume", path: "/resume" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navCenterRef = useRef(null);
  const navItemRefs = useRef({});
  const [activePill, setActivePill] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoverPill, setHoverPill] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isActive = useCallback(
    (path) => {
      if (path === "/") {
        return currentPath === "/";
      }
      return currentPath.startsWith(path);
    },
    [currentPath]
  );

  // Calculate and align the liquid glass active indicator
  const updateActivePosition = useCallback(() => {
    const activeItem = NAV_ITEMS.find((item) => isActive(item.path));
    const activePath = activeItem ? activeItem.path : "/";
    const activeEl = navItemRefs.current[activePath];
    const container = navCenterRef.current;

    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setActivePill({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  }, [isActive]);

  useEffect(() => {
    updateActivePosition();
    window.addEventListener("resize", updateActivePosition);
    const timer = setTimeout(updateActivePosition, 80);
    return () => {
      window.removeEventListener("resize", updateActivePosition);
      clearTimeout(timer);
    };
  }, [updateActivePosition]);

  const handleItemHover = (e) => {
    const container = navCenterRef.current;
    if (container && e.currentTarget) {
      const containerRect = container.getBoundingClientRect();
      const elRect = e.currentTarget.getBoundingClientRect();
      setHoverPill({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  };

  const handleContainerLeave = () => {
    setHoverPill((prev) => ({ ...prev, opacity: 0 }));
  };

  const socialLinks = [
    {
      icon: <AiFillGithub />,
      url: "https://github.com/muhammadabdullahwaseem-coder",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/m-abdullah-waseem",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/MAbdullah121254",
      label: "X",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/923270256089",
      label: "WhatsApp",
    },
  ];

  return (
    <header className={"floating-navbar-container " + (navColour ? "sticky" : "")}>
      <div className="navbar-pill-wrapper">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand-pill" onClick={() => updateExpanded(false)}>
          <span style={{ color: "#fff", fontWeight: "800" }}>M. Abdullah</span>
          <span className="brand-accent" style={{ fontWeight: "800", marginLeft: "2px" }}>.dev</span>
        </Link>

        {/* Center Nav Capsule (Desktop) with Fluid Liquid Glass Animation */}
        <div
          ref={navCenterRef}
          className="nav-center-pill d-none d-lg-flex"
          onMouseLeave={handleContainerLeave}
        >
          {/* Sliding Liquid Glass Active Pill Indicator */}
          <div
            className="nav-liquid-glass-active"
            style={{
              transform: `translate3d(${activePill.left}px, 0, 0)`,
              width: `${activePill.width}px`,
              opacity: activePill.opacity,
            }}
            aria-hidden="true"
          />

          {/* Fluid Liquid Hover Glaze */}
          <div
            className="nav-liquid-glass-hover"
            style={{
              transform: `translate3d(${hoverPill.left}px, 0, 0)`,
              width: `${hoverPill.width}px`,
              opacity: hoverPill.opacity,
            }}
            aria-hidden="true"
          />

          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                ref={(el) => (navItemRefs.current[item.path] = el)}
                to={item.path}
                className={"nav-pill-item " + (active ? "active" : "")}
                onClick={() => updateExpanded(false)}
                onMouseEnter={handleItemHover}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Social Icons (Desktop) */}
        <div className="nav-social-wrap d-none d-lg-flex">
          {socialLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="nav-social-btn"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="d-lg-none navbar-toggler-custom"
          onClick={() => updateExpanded(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer (Only rendered on mobile when expand is true) */}
      {expand && (
        <div className="mobile-navbar-drawer d-lg-none">
          <div className="mobile-nav-pill-menu">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={"mobile-nav-pill-item " + (active ? "active" : "")}
                  onClick={() => updateExpanded(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mobile-nav-socials">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="nav-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
