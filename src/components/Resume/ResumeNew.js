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
                <span className="resume-title-badge">Full-Stack Developer | AI Systems</span>
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
            </div>
          </div>

          {/* 1. Profile Summary */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineUser className="resume-section-icon" />
              Profile Summary
            </h3>
            <p className="resume-profile-text">
              Full-Stack Developer specializing in AI-integrated applications, building multi-agent systems (CrewAI), RAG pipelines with vector databases, and production-grade web/mobile platforms. Experienced in engineering end-to-end software solutions — from autonomous cognitive workflows to scalable React/React Native platforms backed by robust cloud APIs.
            </p>
          </div>

          {/* 2. Technical Skills */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineApartment className="resume-section-icon" />
              Technical Skills &amp; Competencies
            </h3>
            <div className="resume-skills-grid">
              {/* AI & LLM Tooling */}
              <div className="resume-skill-row">
                <span className="resume-skill-label resume-skill-label--ai">
                  🤖 AI &amp; LLM Tooling
                </span>
                <div className="resume-skill-pills">
                  <span className="resume-pill resume-pill--ai">CrewAI (Multi-Agent)</span>
                  <span className="resume-pill resume-pill--ai">ChromaDB (Vector DB)</span>
                  <span className="resume-pill resume-pill--ai">RAG Pipelines</span>
                  <span className="resume-pill resume-pill--ai">Groq &amp; Gemini APIs</span>
                  <span className="resume-pill resume-pill--ai">Prompt Engineering</span>
                  <span className="resume-pill resume-pill--ai">LLM Calibration</span>
                  <span className="resume-pill resume-pill--ai">Autonomous Workflows</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">💻 Frontend Development</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">React.js</span>
                  <span className="resume-pill">Next.js</span>
                  <span className="resume-pill">React Native &amp; Expo</span>
                  <span className="resume-pill">Redux Toolkit</span>
                  <span className="resume-pill">Context API</span>
                  <span className="resume-pill">Tailwind CSS</span>
                  <span className="resume-pill">Bootstrap</span>
                  <span className="resume-pill">HTML5 / CSS3</span>
                </div>
              </div>

              {/* Backend & Systems */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">⚙️ Backend &amp; Architecture</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">Node.js</span>
                  <span className="resume-pill">Express.js</span>
                  <span className="resume-pill">FastAPI</span>
                  <span className="resume-pill">RESTful APIs</span>
                  <span className="resume-pill">WebSockets (Socket.io)</span>
                  <span className="resume-pill">JWT Authentication</span>
                </div>
              </div>

              {/* Databases */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">🗄️ Databases &amp; Embeddings</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">MongoDB Atlas</span>
                  <span className="resume-pill">ChromaDB</span>
                  <span className="resume-pill">Mongoose</span>
                  <span className="resume-pill">Vector Indexing</span>
                  <span className="resume-pill">JSON Schema</span>
                </div>
              </div>

              {/* Tools & DevOps */}
              <div className="resume-skill-row">
                <span className="resume-skill-label">🛠️ Tools &amp; DevOps</span>
                <div className="resume-skill-pills">
                  <span className="resume-pill">Git</span>
                  <span className="resume-pill">GitHub</span>
                  <span className="resume-pill">Docker</span>
                  <span className="resume-pill">Postman</span>
                  <span className="resume-pill">Vercel</span>
                  <span className="resume-pill">Render</span>
                  <span className="resume-pill">Streamlit</span>
                  <span className="resume-pill">VS Code</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Professional Experience */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineRocket className="resume-section-icon" />
              Professional Experience
            </h3>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Freelance Full-Stack &amp; AI Systems Developer</h4>
                <span className="resume-entry-date">2025 – Present</span>
              </div>
              <div className="resume-entry-sub">Self-Employed / Remote | Lahore, Pakistan</div>
              <ul className="resume-bullets">
                <li>
                  <b>Autonomous Multi-Agent AI:</b> Architecting coordinated agent pipelines using <b>CrewAI</b> and <b>ChromaDB RAG</b> to ingest unstructured client data, query contextual knowledge bases, and automate complex cognitive tasks.
                </li>
                <li>
                  <b>Production Web &amp; Mobile:</b> Building full-stack web platforms and cross-platform mobile apps with <b>React.js</b>, <b>React Native</b>, and <b>Node.js</b>, translating complex client business rules into intuitive UI/UX.
                </li>
                <li>
                  <b>Scalable Backend Engineering:</b> Implementing high-availability RESTful APIs, real-time bi-directional <b>Socket.io</b> channels, and secure role-based JWT authentication layers.
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Featured Engineering Systems */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineCode className="resume-section-icon" />
              Featured Engineering Projects
            </h3>
            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <span className="resume-proj-title">Sharpen Prompt</span>
                <span className="resume-proj-tech">Prompt Engineering · LLM Optimization · React</span>
              </div>
              <p className="resume-proj-desc">
                An intelligent prompt engineering utility designed to structure, benchmark, and optimize system instructions for high-reasoning LLMs, eliminating ambiguity and output hallucinations.
              </p>
            </div>

            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <span className="resume-proj-title">Upwork Proposal Generator</span>
                <span className="resume-proj-tech">CrewAI · ChromaDB (RAG) · Groq/Gemini · Streamlit</span>
              </div>
              <p className="resume-proj-desc">
                Automates personalized proposal drafting by querying past winning bids in a ChromaDB vector store and orchestrating specialized CrewAI agents to generate client-tailored proposals.
              </p>
            </div>

            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <span className="resume-proj-title">Hafiz Bags Factory Management System</span>
                <span className="resume-proj-tech">React Native · Expo · MongoDB Atlas · Node.js</span>
              </div>
              <p className="resume-proj-desc">
                Custom mobile operations system replacing paper logs with digital inventory tracking, assembly line cutting/stitching tracking, and order dispatch for a manufacturing client (est. 1993).
              </p>
            </div>

            <div className="resume-project-item">
              <div className="resume-proj-title-row">
                <span className="resume-proj-title">Vehicle Damage Detection (DL)</span>
                <span className="resume-proj-tech">Deep Learning · Computer Vision · PyTorch · FastAPI</span>
              </div>
              <p className="resume-proj-desc">
                Exterior vehicle damage classification and localized triage system using deep learning to expedite insurance claims and fleet inspection workflows.
              </p>
            </div>
          </div>

          {/* 5. Education (Held until Abdullah confirms accurate status) */}
          <div className="resume-block">
            <h3 className="resume-section-title">
              <AiOutlineBook className="resume-section-icon" />
              Education
            </h3>
            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Certificate in Full Stack Web Development (MERN) &amp; AI</h4>
                <span className="resume-entry-date">2025 – 2026</span>
              </div>
              <div className="resume-entry-sub">Nexskill (Arfa Software Technology Park) | Lahore, Pakistan</div>
            </div>

            <div className="resume-entry">
              <div className="resume-entry-header">
                <h4 className="resume-entry-role">Intermediate in Computer Science (ICS)</h4>
                <span className="resume-entry-date">2024 – 2026</span>
              </div>
              <div className="resume-entry-sub">Punjab Group of Colleges | Lahore, Pakistan</div>
            </div>
          </div>
        </div>

        {/* Bottom Download Button */}
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
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
