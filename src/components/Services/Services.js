import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGlobal,
  AiOutlineMobile,
  AiOutlineRobot,
  AiOutlineRocket,
  AiOutlineTool,
  AiOutlineMessage,
} from "react-icons/ai";
import "./Services.css";

const WHATSAPP_LINK = "https://wa.me/923270256089";

const services = [
  {
    icon: <AiOutlineGlobal />,
    title: "Web Development",
    popular: false,
    description:
      "High-performance, responsive web applications, SaaS platforms, and enterprise dashboards built with modern React, Next.js, and scalable cloud architectures.",
    tags: ["React.js", "Next.js", "Full-Stack", "Cloud & APIs"],
    items: [
      { label: "Landing page & portfolio platforms" },
      { label: "Multi-page business & SaaS portals" },
      { label: "Full web app & enterprise dashboards" },
    ],
    features: [
      "SEO & performance optimization",
      "Mobile-first responsive design",
      "Dedicated support period",
    ],
  },
  {
    icon: <AiOutlineMobile />,
    title: "Mobile App Development",
    badge: "Most Popular",
    popular: true,
    description:
      "Cross-platform iOS and Android mobile applications built for smooth offline functionality, fluid animations, and seamless native device integration.",
    tags: ["React Native", "iOS & Android", "Expo", "API Sync"],
    items: [
      { label: "Cross-platform iOS & Android apps" },
      { label: "App Store & Play Store deployment" },
      { label: "Backend API & offline data sync" },
    ],
    features: [
      "React Native & Expo native codebases",
      "Full system design & support",
    ],
  },
  {
    icon: <AiOutlineRobot />,
    title: "AI Agent & Automation Systems",
    popular: false,
    description:
      "Multi-agent orchestration and RAG pipelines that automate complex workflows — from proposal generation to document intelligence. Built with CrewAI, ChromaDB, and production LLM APIs.",
    tags: ["CrewAI", "RAG", "Vector Databases", "LLM Integration"],
    items: [
      { label: "Multi-agent workflow orchestration (CrewAI)" },
      { label: "RAG & vector knowledge bases (ChromaDB)" },
      { label: "Automated proposal & document intelligence" },
    ],
    features: [
      "Production LLM APIs (Groq / Gemini / Claude)",
      "Deterministic validation & hallucination guards",
      "Enterprise workflow automation & sync",
    ],
  },
  {
    icon: <AiOutlineTool />,
    title: "Custom AI Tooling",
    popular: false,
    description:
      "Purpose-built internal tools that put LLMs to work on a specific job — prompt engineering utilities, workflow automation, and API integrations tailored to how your team actually operates.",
    tags: ["Prompt Engineering", "API Integration", "Workflow Automation"],
    items: [
      { label: "Custom prompt engineering & calibration suites" },
      { label: "Internal team workflow automation tools" },
      { label: "Bespoke LLM API integrations & middleware" },
    ],
    features: [
      "Tailored exactly to your operational stack",
      "Zero-friction developer & team ergonomics",
      "Secure key handling & cost-efficient caching",
    ],
  },
  {
    icon: <AiOutlineMessage />,
    title: "AI Chatbots & Virtual Assistants",
    popular: false,
    description:
      "Intelligent conversational bots and virtual assistants deployed across WhatsApp, Telegram, and web portals with CRM and database integrations.",
    tags: ["WhatsApp Bots", "Telegram", "CRM Sync", "Fast Inference"],
    items: [
      { label: "WhatsApp, Web & Telegram bots" },
      { label: "Customer support & lead capture flows" },
      { label: "CRM & live database webhook sync" },
    ],
    features: [
      "CRM & API integrations",
      "Groq / Gemini high-throughput inference",
    ],
  },
];

function Services() {
  return (
    <Container fluid className="services-section" id="services">
      <Container>
        <h1 className="services-heading">
          Engineering Services &amp; <span className="purple">Solutions</span>
        </h1>
        <p className="services-subheading">
          Production quality. Custom scoped architectures. Delivered on time.
        </p>

        <Row className="services-grid">
          {services.map((svc, idx) => (
            <Col lg={4} md={6} sm={12} key={idx} className="services-col">
              <div
                className={`services-card-wrapper${svc.popular ? " services-card-wrapper--popular" : ""}`}
              >
                <div className="services-card-spinner" />
                <div className="services-card-inner">
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

                  {/* Description */}
                  {svc.description && (
                    <p className="services-card-desc">{svc.description}</p>
                  )}

                  {/* Tags */}
                  {svc.tags && svc.tags.length > 0 && (
                    <div className="services-tags-wrapper">
                      {svc.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`services-tag-pill${svc.popular ? " services-tag-pill--green" : ""}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Contact for Pricing CTA Header */}
                  <div className="services-pricing-action">
                    <span className="services-scope-tag">Custom Scoped Project</span>
                    <a
                      href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Abdullah! I'd like to contact you for pricing on ${svc.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`services-pricing-cta-btn${svc.popular ? " services-pricing-cta-btn--green" : ""}`}
                    >
                      Contact for Pricing →
                    </a>
                  </div>

                  {/* Deliverables with Get a Quote CTA */}
                  <div className="services-items">
                    {svc.items.map((item, i) => (
                      <div
                        className={`services-item${svc.popular ? " services-item--green" : ""}`}
                        key={i}
                      >
                        <span className="services-item-label">{item.label}</span>
                        <a
                          href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Abdullah! I'd like to get a quote for: ${item.label} (${svc.title}).`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`services-item-quote-btn${svc.popular ? " services-item-quote-btn--green" : ""}`}
                        >
                          Get a Quote
                        </a>
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

                  {/* Main CTA Button */}
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hi Abdullah! I'm interested in your ${svc.title} services. Let's discuss a project quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`services-cta${svc.popular ? " services-cta--popular" : ""}`}
                  >
                    Get a Full Project Quote
                  </a>
                </div>
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
            <div className="services-enterprise-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="services-enterprise-btn"
              >
                Chat on WhatsApp →
              </a>
              <a
                href="mailto:muhammadabdullah121254@gmail.com?subject=Enterprise%20/%20Custom%20Project%20Inquiry&body=Hi%20Abdullah,%0A%0AI'd%20like%20to%20discuss%20a%20custom%20project..."
                className="services-enterprise-btn services-enterprise-btn--email"
              >
                Send Email Brief →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Services;
