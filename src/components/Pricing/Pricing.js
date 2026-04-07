import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGlobal,
  AiOutlineMobile,
  AiOutlineRobot,
  AiOutlineRocket,
} from "react-icons/ai";
import "./Pricing.css";

const WHATSAPP_BASE = "https://wa.me/923270256089?text=";

const pricingData = [
  {
    icon: <AiOutlineGlobal />,
    title: "Web Development",
    startingPrice: "PKR 25,000",
    popular: false,
    tiers: [
      { name: "Landing page / Portfolio", price: "PKR 25K" },
      { name: "Multi-page business site", price: "PKR 45K+" },
      { name: "Full web app / Dashboard", price: "PKR 80K+" },
    ],
    features: [
      "SEO optimization",
      "Mobile-first design",
      "1 month free support",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your Web Development services. I'd like to get a quote for my project.",
  },
  {
    icon: <AiOutlineMobile />,
    title: "Mobile Apps",
    badge: "Most Popular",
    startingPrice: "PKR 60,000",
    popular: true,
    tiers: [
      { name: "React Native / Flutter", price: "Cross-platform" },
      { name: "App Store & Play Store deployment", price: "Included" },
      { name: "Backend API integration", price: "Included" },
    ],
    features: [
      "iOS + Android from one codebase",
      "Backend API integration",
      "2 months free support",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your Mobile App Development services. I'd like to get a quote for my app project.",
  },
  {
    icon: <AiOutlineRobot />,
    title: "AI Chatbots & Voice Bots",
    startingPrice: "PKR 35,000",
    popular: false,
    tiers: [
      { name: "WhatsApp / Web / Telegram bots", price: "Custom" },
      { name: "Voice bots (inbound & outbound)", price: "Custom" },
      { name: "RAG on custom knowledge base", price: "Custom" },
    ],
    features: [
      "CRM & API integrations",
      "Custom knowledge base",
      "1 month free support",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your AI Chatbot / Voice Bot services. I'd like to get a quote.",
  },
];

function Pricing() {
  return (
    <Container fluid className="pricing-section" id="pricing">
      <Container>
        <h1 className="pricing-heading">
          Services & <span className="purple">Pricing</span>
        </h1>
        <p className="pricing-subheading">
          Transparent pricing. Premium results. Let's build something great.
        </p>

        <Row className="pricing-cards-row">
          {pricingData.map((plan, index) => (
            <Col md={4} sm={12} key={index} className="pricing-card-col">
              <div
                className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}
              >
                {plan.badge && (
                  <div className="pricing-badge">{plan.badge}</div>
                )}

                <div className="pricing-card-icon">{plan.icon}</div>
                <h2 className="pricing-card-title">{plan.title}</h2>
                <div className="pricing-card-price">
                  Starting{" "}
                  <span className="pricing-amount">{plan.startingPrice}</span>
                </div>

                <div className="pricing-tiers">
                  {plan.tiers.map((tier, i) => (
                    <div className="pricing-tier-item" key={i}>
                      <span className="tier-name">{tier.name}</span>
                      <span className="tier-price">{tier.price}</span>
                    </div>
                  ))}
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <span className="feature-check">✓</span> {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pricing-cta-btn ${plan.popular ? "pricing-cta-btn--popular" : ""}`}
                >
                  Get a Quote
                </a>
              </div>
            </Col>
          ))}
        </Row>

        {/* Custom Project CTA */}
        <div className="custom-project-cta">
          <div className="custom-project-inner">
            <AiOutlineRocket className="custom-project-icon" />
            <div className="custom-project-text">
              <h3>Have a Custom / Enterprise Project?</h3>
              <p>
                SaaS platforms, enterprise dashboards, retainer contracts — let's
                discuss your requirements.
              </p>
            </div>
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent(
                "Hi Abdullah! I have a custom/enterprise project I'd like to discuss. Here are the details:"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-project-btn"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Pricing;
