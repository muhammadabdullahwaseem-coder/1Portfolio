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
import "./Pricing.css";

const WHATSAPP_BASE = "https://wa.me/923270256089?text=";

const pricingData = [
  {
    icon: <AiOutlineGlobal />,
    title: "Web Development",
    popular: false,
    description:
      "High-performance, responsive web applications, SaaS platforms, and enterprise dashboards built with modern React, Next.js, and scalable cloud architectures.",
    tags: ["React.js", "Next.js", "Full-Stack", "Cloud & APIs"],
    tiers: [
      { name: "Landing page & Portfolio platform" },
      { name: "Multi-page business & SaaS portal" },
      { name: "Full web app & custom dashboards" },
    ],
    features: [
      "SEO & performance optimization",
      "Mobile-first responsive design",
      "Dedicated support period",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your Web Development services. I'd like to get a quote for my project.",
  },
  {
    icon: <AiOutlineMobile />,
    title: "Mobile App Development",
    badge: "Most Popular",
    popular: true,
    description:
      "Cross-platform iOS and Android mobile applications built for smooth offline functionality, fluid animations, and seamless native device integration.",
    tags: ["React Native", "iOS & Android", "Expo", "API Sync"],
    tiers: [
      { name: "Cross-platform iOS & Android apps" },
      { name: "App Store & Play Store deployment" },
      { name: "Backend API & offline data sync" },
    ],
    features: [
      "React Native & Expo native codebases",
      "Backend API integration",
      "Dedicated support period",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your Mobile App Development services. I'd like to get a quote for my app project.",
  },
  {
    icon: <AiOutlineRobot />,
    title: "AI Agent & Automation Systems",
    popular: false,
    description:
      "Multi-agent orchestration and RAG pipelines that automate complex workflows — from proposal generation to document intelligence. Built with CrewAI, ChromaDB, and production LLM APIs.",
    tags: ["CrewAI", "RAG", "Vector Databases", "LLM Integration"],
    tiers: [
      { name: "Multi-agent workflow orchestration (CrewAI)" },
      { name: "RAG & vector knowledge bases (ChromaDB)" },
      { name: "Automated proposal & document intelligence" },
    ],
    features: [
      "Production LLM APIs (Groq / Gemini / Claude)",
      "Deterministic validation & hallucination guards",
      "Enterprise workflow automation & sync",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your AI Agent & Automation Systems. I'd like to get a quote.",
  },
  {
    icon: <AiOutlineTool />,
    title: "Custom AI Tooling",
    popular: false,
    description:
      "Purpose-built internal tools that put LLMs to work on a specific job — prompt engineering utilities, workflow automation, and API integrations tailored to how your team actually operates.",
    tags: ["Prompt Engineering", "API Integration", "Workflow Automation"],
    tiers: [
      { name: "Custom prompt engineering & calibration suites" },
      { name: "Internal team workflow automation tools" },
      { name: "Bespoke LLM API integrations & middleware" },
    ],
    features: [
      "Tailored exactly to your operational stack",
      "Zero-friction developer & team ergonomics",
      "Secure key handling & cost-efficient caching",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your Custom AI Tooling services. I'd like to get a quote.",
  },
  {
    icon: <AiOutlineMessage />,
    title: "AI Chatbots & Virtual Assistants",
    popular: false,
    description:
      "Intelligent conversational bots and virtual assistants deployed across WhatsApp, Telegram, and web portals with CRM and database integrations.",
    tags: ["WhatsApp Bots", "Telegram", "CRM Sync", "Fast Inference"],
    tiers: [
      { name: "WhatsApp, Web & Telegram bots" },
      { name: "Customer support & lead capture flows" },
      { name: "CRM & live database webhook sync" },
    ],
    features: [
      "CRM & API integrations",
      "Custom knowledge base",
      "Fast inference (Groq / Gemini)",
    ],
    whatsappMsg:
      "Hi Abdullah! I'm interested in your AI Chatbots & Virtual Assistants services. I'd like to get a quote.",
  },
];

function Pricing() {
  return (
    <Container fluid className="pricing-section" id="pricing">
      <Container>
        <h1 className="pricing-heading">
          Engineering Services &amp; <span className="purple">Solutions</span>
        </h1>
        <p className="pricing-subheading">
          Production quality. Custom scoped architectures. Delivered on time.
        </p>

        <Row className="pricing-cards-row">
          {pricingData.map((plan, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="pricing-card-col">
              <div
                className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}
              >
                {plan.badge && (
                  <div className="pricing-badge">{plan.badge}</div>
                )}

                <div className="pricing-card-icon">{plan.icon}</div>
                <h2 className="pricing-card-title">{plan.title}</h2>
                
                {plan.description && (
                  <p className="pricing-card-desc">{plan.description}</p>
                )}

                {plan.tags && plan.tags.length > 0 && (
                  <div className="pricing-tags-wrapper">
                    {plan.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`pricing-tag-pill ${plan.popular ? "pricing-tag-pill--green" : ""}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pricing-card-action">
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pricing-contact-pill-btn"
                  >
                    Contact for Pricing →
                  </a>
                </div>

                <div className="pricing-tiers">
                  {plan.tiers.map((tier, i) => (
                    <div className="pricing-tier-item" key={i}>
                      <span className="tier-name">{tier.name}</span>
                      <a
                        href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi Abdullah! I'd like to get a quote for: ${tier.name} under ${plan.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tier-quote-btn"
                      >
                        Get a Quote
                      </a>
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
            <div className="custom-project-actions">
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(
                  "Hi Abdullah! I have a custom/enterprise project I'd like to discuss. Here are the details:"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-project-btn"
              >
                Chat on WhatsApp →
              </a>
              <a
                href="mailto:muhammadabdullah121254@gmail.com?subject=Custom%20/%20Enterprise%20Project%20Inquiry&body=Hi%20Abdullah,%0A%0AI'd%20like%20to%20discuss%20a%20custom%20project..."
                className="custom-project-btn custom-project-btn--email"
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

export default Pricing;
