import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineQuestionCircle,
  AiOutlineCalendar,
  AiOutlineProject,
} from "react-icons/ai";
import "./Contact.css";

const WHATSAPP_BASE = "https://wa.me/923270256089?text=";

const contactCards = [
  {
    icon: <AiOutlineQuestionCircle />,
    title: "Quick Question",
    description:
      "Have a question about my services, tech stack, or availability? Drop a message!",
    primaryMsg:
      "Hi Abdullah! I have a quick question about your services.",
    primaryLabel: "Ask a Question",
    secondaryMsg: null,
    secondaryLabel: null,
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Book a Meeting",
    description:
      "Schedule a free 30-min discovery call to discuss your project in detail.",
    primaryMsg:
      "Hi Abdullah! I'd like to book a free 30-min discovery call to discuss my project.",
    primaryLabel: "Book a Call",
    secondaryMsg:
      "Hi Abdullah! I'd like to get a price quote for my project. Here are the details:",
    secondaryLabel: "Get a Price Quote",
  },
  {
    icon: <AiOutlineProject />,
    title: "Start a Project",
    description:
      "Ready to kick things off? Send your project details and let's get started!",
    primaryMsg:
      "Hi Abdullah! I'm ready to start a project. Here are the details:\n\nProject type: \nDeadline: \nBudget: ",
    primaryLabel: "Start a Project",
    secondaryMsg: null,
    secondaryLabel: null,
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
          Reach out on WhatsApp — I typically respond within a few hours.
        </p>

        <div className="whatsapp-number-display">
          <svg
            className="wa-inline-icon"
            viewBox="0 0 24 24"
            fill="#25D366"
            width="22"
            height="22"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>+92 327 0256089</span>
        </div>

        <Row className="contact-cards-row">
          {contactCards.map((card, index) => (
            <Col md={4} sm={12} key={index} className="contact-card-col">
              <div className="contact-card">
                <div className="contact-card-icon">{card.icon}</div>
                <h3 className="contact-card-title">{card.title}</h3>
                <p className="contact-card-desc">{card.description}</p>

                <div className="contact-card-actions">
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(card.primaryMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn contact-btn--primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                      style={{ marginRight: 8, flexShrink: 0 }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {card.primaryLabel}
                  </a>

                  {card.secondaryMsg && (
                    <a
                      href={`${WHATSAPP_BASE}${encodeURIComponent(card.secondaryMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-btn contact-btn--secondary"
                    >
                      {card.secondaryLabel}
                    </a>
                  )}
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
