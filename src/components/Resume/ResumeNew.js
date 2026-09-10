import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Muhammad-Abdullah-Resume.pdf";
import {
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineGithub,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineApartment,
  AiOutlineRocket,
  AiOutlineBook,
  AiOutlineCode,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./Resume.css";

const WHATSAPP_LINK = "https://wa.me/923270256089";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Section Header */}
        <div className="resume-header-block text-center">
          <div className="resume-subtitle-badge">CURRICULUM VITAE // VERIFIED PROFILE</div>
          <h1 className="resume-heading">
            Professional <strong className="hero-title-gradient">Resume</strong>
          </h1>
          <p className="resume-subtext">
            Comprehensive breakdown of engineering competencies, multi-agent AI systems, full-stack architectures, and production case studies.
          </p>
        </div>

        {/* Top Download Button */}
        <Row className="resume-actions-row">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Muhammad-Abdullah-Resume.pdf"
            className="resume-download-btn"
          >
            <AiOutlineDownload size={18} />
            Download PDF Resume
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-whatsapp-btn"
          >
            <FaWhatsapp size={18} />
            Quick Chat on WhatsApp
          </a>
        </Row>

        {/* Native Dark Glassmorphic Resume Sheet */}
        <div className="resume-paper">
          {/* Header Banner */}
          <div className="resume-banner">
            <div className="resume-name-row">
              <div>
                <h2 className="resume-name">Muhammad Abdullah Waseem</h2>
                <span className="resume-title-badge">MERN Stack Developer | AI-Integrated Applications</span>
              </div>
            </div>

            <div className="resume-contact-bar">
              <a href="mailto:muhammadabdullah121254@gmail.com" className="resume-contact-item">
                <AiOutlineMail className="resume-contact-icon" />
                muhammadabdullah121254@gmail.com
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <AiOutlinePhone className="resume-contact-icon" />
                +92 327 0256089
              </a>
              <span className="resume-contact-item">
                <AiOutlineEnvironment className="resume-contact-icon" />
                Lahore, Pakistan
              </span>
              <a
                href="https://github.com/muhammadabdullahwaseem-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <AiOutlineGithub className="resume-contact-icon" />
                github.com/muhammadabdullahwaseem-coder
              </a>
              <a
                href="https://muhammad-abdullah-portfolio1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <AiOutlineGlobal className="resume-contact-icon" />
                Portfolio
              </a>
            </div>
          </div>

          {/* 1. Profile Summary */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineUser className="resume-section-icon" />
              Profile
            </h3>
            <p className="resume-profile-text">
              MERN Stack Developer building real, verifiable full-stack and AI-integrated projects — from a production factory-management system for an operating manufacturing business, to AI agent systems, computer vision, and real-time applications. Comfortable owning a project end-to-end: system design, infrastructure debugging, and deployment.
            </p>
          </div>

          {/* 2. Experience */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineRocket className="resume-section-icon" />
              Experience
            </h3>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Full-Stack Developer (Family Business Systems)</h4>
                <span className="resume-entry-date">2025 – Present</span>
              </div>
              <div className="resume-entry-sub">Hafiz Bags — Bag Manufacturing (est. 1993)</div>
              <ul className="resume-bullets">
                <li>
                  Architected and am building a factory management system (React Native/Expo, Node/Express, MongoDB Atlas) covering payroll and audit workflows for an operating manufacturing business.
                </li>
                <li>
                  Owned full system design end-to-end: PRD, environment setup, and infrastructure debugging (ISP-level DNS blocking of MongoDB SRV, Node/Expo version conflicts) to get a real deployment running on real infrastructure.
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Projects */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineCode className="resume-section-icon" />
              Projects
            </h3>

            {/* Upwork Proposal Generator */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://upwork-proposal-writter.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  Upwork Proposal Generator
                </a>
                <span className="resume-proj-tech">CrewAI · RAG (ChromaDB) · Jinja2 · Groq/Gemini · Streamlit</span>
              </div>
              <p className="resume-proj-desc">
                Multi-agent system (CrewAI) that generates tailored Upwork proposals using a retrieval-augmented generation pipeline over a ChromaDB vector store, with Jinja2-templated prompt construction.
              </p>
            </div>

            {/* Vehicle Damage Detection System */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://vehicle-damage-detection-system-dl.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  Vehicle Damage Detection System
                </a>
                <span className="resume-proj-tech">ResNet-50 · PyTorch · FastAPI · Streamlit</span>
              </div>
              <p className="resume-proj-desc">
                Image classification system for detecting and categorizing vehicle damage, served via a FastAPI backend with a Streamlit interface.
              </p>
            </div>

            {/* Sharpen Prompt */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://sharpen-prompt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  Sharpen Prompt
                </a>
                <span className="resume-proj-tech">Electron · Vite/React · Node.js Proxy Server · Gemini API</span>
              </div>
              <p className="resume-proj-desc">
                Cross-platform prompt-optimization tool (ships as web, desktop .exe, and Android .apk) with a Node.js backend proxy that translates requests to the Gemini API, keeping the frontend provider-agnostic.
              </p>
            </div>

            {/* Nex-Link */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://link-shortener-by-mrab.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  Nex-Link
                </a>
                <span className="resume-proj-tech">Node.js · Express · MongoDB</span>
              </div>
              <p className="resume-proj-desc">
                URL shortener service with link generation, redirection, and persistence.
              </p>
            </div>

            {/* Real-Time Chat Application */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://chat-app-socket-io-mj0n.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  Real-Time Chat Application
                </a>
                <span className="resume-proj-tech">React · Node.js · Socket.io</span>
              </div>
              <p className="resume-proj-desc">
                Bi-directional messaging app with WebSocket-based instant delivery, built to handle multiple concurrent users.
              </p>
            </div>

            {/* 3D Solar System Explorer */}
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <a
                  href="https://solar-system-by-abdullah.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-proj-title text-decoration-none"
                  style={{ color: "#38BDF8" }}
                >
                  3D Solar System Explorer
                </a>
                <span className="resume-proj-tech">Three.js</span>
              </div>
              <p className="resume-proj-desc">
                Interactive 3D visualization of the solar system with orbital mechanics and camera controls.
              </p>
            </div>
          </div>

          {/* 4. Skills */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineApartment className="resume-section-icon" />
              Skills
            </h3>
            <div className="resume-skills-grid">
              {/* AI / Agents */}
              <div className="resume-skill-row">
                <span className="resume-skill-label resume-skill-label--ai">
                  🤖 AI / Agents
                </span>
                <div className="resume-skill-pills">
                  <span className="resume-pill resume-pill--ai">CrewAI</span>
                  <span className="resume-pill resume-pill--ai">LangChain</span>
                  <span className="resume-pill resume-pill--ai">RAG</span>
                  <span className="resume-pill resume-pill--ai">Vector Databases (ChromaDB)</span>
                  <span className="resume-pill resume-pill--ai">Prompt Engineering</span>
                  <span className="resume-pill resume-pill--ai">Groq API</span>
                  <span className="resume-pill resume-pill--ai">Gemini API</span>
                </div>
              </div>

              {/* ML / CV */}
              <div className="resume-skill-row">
                <span className="resume-skill-label resume-skill-label--ai">
                  🧠 ML / CV
                </span>
                <div className="resume-skill-pills">
                  <span className="resume-pill resume-pill--ai">PyTorch</span>
                  <span className="resume-pill resume-pill--ai">ResNet-50</span>
                  <span className="resume-pill resume-pill--ai">FastAPI</span>
                  <span className="resume-pill resume-pill--ai">Streamlit</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">💻 Frontend</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">React.js</span>
                  <span className="resume-pill">React Native (Expo)</span>
                  <span className="resume-pill">Redux Toolkit</span>
                  <span className="resume-pill">Context API</span>
                  <span className="resume-pill">Tailwind CSS</span>
                  <span className="resume-pill">Bootstrap</span>
                  <span className="resume-pill">Three.js</span>
                </div>
              </div>

              {/* Backend */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">⚙️ Backend</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">Node.js</span>
                  <span className="resume-pill">Express.js</span>
                  <span className="resume-pill">RESTful APIs</span>
                  <span className="resume-pill">Socket.io (WebSockets)</span>
                  <span className="resume-pill">JWT &amp; Bcrypt Auth</span>
                </div>
              </div>

              {/* Database */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">🗄️ Database</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">MongoDB</span>
                  <span className="resume-pill">MongoDB Atlas</span>
                  <span className="resume-pill">Mongoose</span>
                </div>
              </div>

              {/* Languages */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">🌐 Languages</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">JavaScript (ES6+)</span>
                  <span className="resume-pill">Python</span>
                  <span className="resume-pill">C++</span>
                  <span className="resume-pill">HTML5</span>
                  <span className="resume-pill">CSS3</span>
                </div>
              </div>

              {/* Tools */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">🛠️ Tools</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">Git</span>
                  <span className="resume-pill">GitHub</span>
                  <span className="resume-pill">VS Code</span>
                  <span className="resume-pill">Postman</span>
                  <span className="resume-pill">Vercel</span>
                  <span className="resume-pill">Render</span>
                  <span className="resume-pill">Netlify</span>
                  <span className="resume-pill">Streamlit Community Cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Education */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineBook className="resume-section-icon" />
              Education
            </h3>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">BS Electronics</h4>
                <span className="resume-entry-date">2026 – 2030</span>
              </div>
              <div className="resume-entry-sub">Government College University, Lahore (GCUL)</div>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Certificate in Full Stack Web Development (MERN) &amp; AI</h4>
                <span className="resume-entry-date">2025 – 2026</span>
              </div>
              <div className="resume-entry-sub">Nexskill, Arfa Software Technology Park, Lahore</div>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Intermediate in Computer Science (ICS)</h4>
                <span className="resume-entry-date">2024 – 2026</span>
              </div>
              <div className="resume-entry-sub">Punjab Group of Colleges, Lahore</div>
            </div>
          </div>
        </div>

      </Container>
    </Container>
  );
}

export default ResumeNew;
