import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

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

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/project" },
    { label: "Services", path: "/services" },
    { label: "Resume", path: "/resume" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
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

        {/* Center Nav Capsule (Desktop) */}
        <div className="nav-center-pill d-none d-lg-flex">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={"nav-pill-item " + (active ? "active" : "")}
                onClick={() => updateExpanded(false)}
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
            {navItems.map((item) => {
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
