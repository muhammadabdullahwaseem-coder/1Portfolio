import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsCpu, BsCheckCircleFill, BsLightningCharge, BsLayersFill } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* Exact WebChain Dev Black Hole Video Background */}
        <div className="hero-blackhole-container" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-blackhole-video"
          >
            <source src={process.env.PUBLIC_URL + "/blackhole.webm"} type="video/webm" />
          </video>
        </div>
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header">
              {/* Status Pill */}
              <div className="hero-status-pill">
                <span className="status-ping"></span>
                <span>Available for AI & Full-Stack Engagements</span>
              </div>

              <h1 className="hero-main-title">
                Muhammad <span className="hero-title-gradient">Abdullah Waseem</span>
              </h1>

              <h2 className="hero-role-subtitle">
                Full-Stack Developer specializing in{" "}
                <span className="hero-accent-text">AI-Integrated Applications</span>
              </h2>

              <div className="hero-typewriter-container">
                <span className="terminal-symbol">$</span>
                <Type />
              </div>

              <p className="hero-bio-lead">
                Engineering autonomous multi-agent systems (CrewAI), production RAG pipelines with vector databases, and resilient full-stack web and mobile architectures for real-world business operations.
              </p>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <Link to="/project" className="btn-hero-primary">
                  <span>Explore AI Projects</span>
                  <AiOutlineArrowRight className="btn-arrow" />
                </Link>

                <a
                  href="https://wa.me/923270256089"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-secondary"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:muhammadabdullah121254@gmail.com?subject=Project%20Inquiry&body=Hi%20Abdullah,%0A%0AI'm%20reaching%20out%20regarding%20a%20project..."
                  className="btn-hero-secondary btn-hero-email"
                >
                  <AiOutlineMail />
                  <span>Email</span>
                </a>
              </div>

              {/* Telemetry quick badges */}
              <div className="hero-quick-tags">
                <span className="quick-tag">
                  <RiRobot2Line /> CrewAI & Multi-Agent
                </span>
                <span className="quick-tag">
                  <BsLightningCharge /> RAG & ChromaDB
                </span>
                <span className="quick-tag">
                  <BsCpu /> React & Expo Native
                </span>
                <span className="quick-tag">
                  <BsLayersFill /> Node & Mongo Atlas
                </span>
              </div>
            </Col>

            {/* Right Column: AI Architecture Telemetry Window */}
            <Col lg={5} md={12} className="home-visual-col">
              <div className="ai-telemetry-window">
                <div className="telemetry-header">
                  <div className="telemetry-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="telemetry-title">ai-agent-runtime.pipeline</span>
                  <span className="telemetry-status-badge">ACTIVE</span>
                </div>

                <div className="telemetry-body">
                  <div className="telemetry-node active-node">
                    <div className="node-indicator">
                      <BsCheckCircleFill className="node-icon-success" />
                    </div>
                    <div className="node-content">
                      <div className="node-title-row">
                        <span className="node-name">Agent 1: Ingestion & Brief Parsing</span>
                        <span className="node-badge">CrewAI</span>
                      </div>
                      <p className="node-desc">Structured objective & constraints extracted</p>
                    </div>
                  </div>

                  <div className="telemetry-connector">
                    <span className="connector-line"></span>
                    <span className="connector-pulse"></span>
                  </div>

                  <div className="telemetry-node active-node">
                    <div className="node-indicator">
                      <BsCheckCircleFill className="node-icon-success" />
                    </div>
                    <div className="node-content">
                      <div className="node-title-row">
                        <span className="node-name">Agent 2: Vector Context Retrieval</span>
                        <span className="node-badge">ChromaDB RAG</span>
                      </div>
                      <p className="node-desc">Top-K embeddings matched with Cosine similarity</p>
                    </div>
                  </div>

                  <div className="telemetry-connector">
                    <span className="connector-line"></span>
                    <span className="connector-pulse"></span>
                  </div>

                  <div className="telemetry-node live-node">
                    <div className="node-indicator">
                      <span className="live-ping"></span>
                    </div>
                    <div className="node-content">
                      <div className="node-title-row">
                        <span className="node-name">Agent 3: Multi-Model Inference & Synthesis</span>
                        <span className="node-badge highlight-badge">Groq / Gemini</span>
                      </div>
                      <p className="node-desc">Streaming response generation & validation</p>
                    </div>
                  </div>

                  {/* Telemetry Metrics Bar */}
                  <div className="telemetry-metrics-bar">
                    <div className="metric-item">
                      <span className="metric-label">LATENCY</span>
                      <span className="metric-val">340ms</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">ARCHITECTURE</span>
                      <span className="metric-val">Autonomous RAG</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">DELIVERY</span>
                      <span className="metric-val">Web + Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammadabdullahwaseem-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/923270256089"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:muhammadabdullah121254@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/m-abdullah-waseem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Contact />
    </section>
  );
}

export default Home;
