import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/project" },
    { label: "Services", path: "/services" },
    { label: "Resume", path: "/resume" },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4 align-items-start">
          {/* Left Column: Brand & Tagline */}
          <Col lg={4} md={6} className="footer-col footer-col-brand">
            <div className="footer-brand-title">
              <span>Muhammad Abdullah</span>
              <span className="brand-accent">.dev</span>
            </div>
            <p className="footer-tagline">
              Full-Stack &amp; AI Systems Engineer building autonomous agent workflows and scalable web architectures.
            </p>
            <p className="footer-copyright">
              &copy; {year} Muhammad Abdullah Waseem. All rights reserved.
            </p>
          </Col>

          {/* Center Column: Quick Links */}
          <Col lg={4} md={6} className="footer-col footer-col-links text-lg-center">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="footer-link-item">
                  <Link to={link.path} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Right Column: Connect & Socials */}
          <Col lg={4} md={12} className="footer-col footer-col-social text-lg-end text-md-start">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-connect-desc">
              Open to engineering opportunities, consulting, and contract builds.
            </p>
            <ul className="footer-social-icons">
              <li className="footer-social-item">
                <a
                  href="https://github.com/muhammadabdullahwaseem-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="footer-social-link"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="https://wa.me/923270256089"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="footer-social-link"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="mailto:muhammadabdullah121254@gmail.com"
                  aria-label="Email"
                  className="footer-social-link"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="https://x.com/MAbdullah121254"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="footer-social-link"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="footer-social-item">
                <a
                  href="https://www.linkedin.com/in/m-abdullah-waseem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="footer-social-link"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
