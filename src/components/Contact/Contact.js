import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineQuestionCircle,
  AiOutlineCalendar,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const WHATSAPP_BASE = "https://wa.me/923270256089?text=";
const GMAIL_ADDRESS = "muhammadabdullah121254@gmail.com";

const contactCards = [
  {
    icon: <AiOutlineQuestionCircle />,
    title: "Quick Question",
    description:
      "Have a question about my engineering capabilities, tech stack, or availability? Drop me a message!",
    subject: "Quick Question regarding your Services",
    emailBody: "Hi Abdullah,\n\nI have a quick question about your services and tech stack:\n\n",
    waMsg: "Hi Abdullah! I have a quick question about your services.",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Book a Discovery Call",
    description:
      "Schedule a 30-min discovery session to discuss your architecture, requirements, and scope in detail.",
    subject: "Discovery Call Request",
    emailBody: "Hi Abdullah,\n\nI'd like to book a 30-minute discovery call to discuss my project.\n\nProject details:\nPreferred date & time:\n",
    waMsg: "Hi Abdullah! I'd like to book a free 30-min discovery call to discuss my project.",
  },
  {
    icon: <AiOutlineProject />,
    title: "Start a Project",
    description:
      "Ready to build? Send over your scope or requirements brief to get a custom scoped architecture.",
    subject: "Project Inception & Architecture Brief",
    emailBody: "Hi Abdullah,\n\nI'm ready to start a project with you. Here are the initial details:\n\nProject Type:\nTarget Timeline:\nEstimated Scope / Features:\n",
    waMsg: "Hi Abdullah! I'm ready to start a project. Here are the details:\n\nProject type:\nDeadline:\nScope:",
  },
];

function Contact() {
  return (
    <Container fluid className="contact-section" id="contact">
      {/* Divider */}
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-glow"></div>
      </div>

      <Container>
        <h1 className="contact-heading">
          Let's <span className="purple">Connect</span>
        </h1>
        <p className="contact-subheading">
          Choose whichever channel suits you best — reach out on WhatsApp or Email directly.
        </p>

        {/* Dual Direct Badges: WhatsApp & Gmail */}
        <div className="contact-channels-bar">
          <a
            href="https://wa.me/923270256089"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-pill contact-channel--wa"
          >
            <FaWhatsapp className="channel-icon" />
            <span>+92 327 0256089</span>
          </a>

          <a
            href={`mailto:${GMAIL_ADDRESS}`}
            className="contact-channel-pill contact-channel--email"
          >
            <AiOutlineMail className="channel-icon" />
            <span>{GMAIL_ADDRESS}</span>
          </a>
        </div>

        <Row className="contact-cards-row">
          {contactCards.map((card, index) => (
            <Col md={4} sm={12} key={index} className="contact-card-col">
              <div className="contact-card">
                <div className="contact-card-icon">{card.icon}</div>
                <h3 className="contact-card-title">{card.title}</h3>
                <p className="contact-card-desc">{card.description}</p>

                <div className="contact-card-actions">
                  {/* WhatsApp Action */}
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(card.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn contact-btn--wa"
                  >
                    <FaWhatsapp className="btn-icon" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Email Action */}
                  <a
                    href={`mailto:${GMAIL_ADDRESS}?subject=${encodeURIComponent(card.subject)}&body=${encodeURIComponent(card.emailBody)}`}
                    className="contact-btn contact-btn--email"
                  >
                    <AiOutlineMail className="btn-icon" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
