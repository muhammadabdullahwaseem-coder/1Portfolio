import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGlobal,
  AiOutlineMobile,
  AiOutlineRobot,
  AiOutlineRocket,
} from "react-icons/ai";
import "./Services.css";

const WHATSAPP_LINK = "https://wa.me/923270256089";

const services = [
  {
    icon: <AiOutlineGlobal />,
    title: "Web Development",
    startingPrice: "PKR 25,000",
    popular: false,
    items: [
      { label: "Landing page / portfolio", price: "PKR 25K" },
      { label: "Multi-page business website", price: "PKR 45K+" },
      { label: "Full web app / dashboard", price: "PKR 80K+" },
    ],
    features: ["SEO optimization", "Mobile-first design", "1 month free support"],
  },
  {
    icon: <AiOutlineMobile />,
    title: "Mobile Apps",
    badge: "Most Popular",
    startingPrice: "PKR 60,000",
    popular: true,
    items: [
      { label: "Cross-platform iOS + Android", price: "React Native / Flutter" },
      { label: "App Store & Play Store deployment", price: "Included" },
      { label: "Backend API integration", price: "Included" },
    ],
    features: ["2 months free support"],
  },
  {
    icon: <AiOutlineRobot />,
    title: "AI Chatbots & Voice Bots",
    startingPrice: "PKR 35,000",
    popular: false,
    items: [
      { label: "WhatsApp / Telegram bots", price: "Custom" },
      { label: "Voice bots (Inbound & Outbound)", price: "Custom" },
      { label: "RAG on custom knowledge base", price: "Custom" },
    ],
    features: ["CRM & API integrations", "1 month free support"],
  },
];

function Services() {
  return (
    <Container fluid className="services-section" id="services">
      <Container>
        <h1 className="services-heading">
          Services & <span className="purple">Pricing</span>
        </h1>
        <p className="services-subheading">
          Transparent pricing. Premium quality. Delivered on time.
        </p>

        <Row className="services-grid">
          {services.map((svc, idx) => (
            <Col lg={4} md={6} sm={12} key={idx} className="services-col">
              <div
                className={`services-card${svc.popular ? " services-card--popular" : ""}`}
              >
                {/* Popular Badge */}
                {svc.badge && (
                  <div className="services-badge">{svc.badge}</div>
                )}

                {/* Icon */}
                <div
                  className={`services-icon${svc.popular ? " services-icon--green" : ""}`}
                >
                  {svc.icon}
                </div>

                {/* Title */}
                <h2 className="services-card-title">{svc.title}</h2>

                {/* Starting Price */}
                <p className="services-starting">
                  Starting{" "}
                  <span
                    className={`services-price${svc.popular ? " services-price--green" : ""}`}
                  >
                    {svc.startingPrice}
                  </span>
                </p>

                {/* Line Items */}
                <div className="services-items">
                  {svc.items.map((item, i) => (
                    <div
                      className={`services-item${svc.popular ? " services-item--green" : ""}`}
                      key={i}
                    >
                      <span className="services-item-label">{item.label}</span>
                      <span
                        className={`services-item-price${svc.popular ? " services-item-price--green" : ""}`}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="services-features">
                  {svc.features.map((feat, i) => (
                    <li key={i}>
                      <span
                        className={`services-check${svc.popular ? " services-check--green" : ""}`}
                      >
                        ✓
                      </span>{" "}
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`services-cta${svc.popular ? " services-cta--popular" : ""}`}
                >
                  Get a Quote
                </a>
              </div>
            </Col>
          ))}
        </Row>

        {/* Enterprise / Custom Banner */}
        <div className="services-enterprise">
          <div className="services-enterprise-inner">
            <AiOutlineRocket className="services-enterprise-icon" />
            <div className="services-enterprise-text">
              <h3>Have a Custom / Enterprise Project?</h3>
              <p>
                SaaS platforms, long-term retainers, or large integrations.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="services-enterprise-btn"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Services;
