import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRightCircle } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="about-bio-container">
          <p className="about-bio-text">
            Hi, I am <span className="highlight-term">Muhammad Abdullah Waseem</span>, based in Lahore, Pakistan.
          </p>

          <p className="about-bio-text">
            I am a <span className="highlight-term">Full-Stack Developer specializing in AI-integrated applications</span>. My work centers on architecting autonomous multi-agent pipelines with <span className="highlight-term">CrewAI</span>, high-performance RAG vector systems utilizing <span className="highlight-term">ChromaDB</span>, and robust web and mobile software for real-world business operations.
          </p>

          <p className="about-bio-text">
            Backed by a professional diploma in <em>Web Development with AI</em> from Nexskill (Arfa Software Technology Park), I focus on bridging production-grade software engineering with state-of-the-art LLM reasoning, agent coordination, and computer vision.
          </p>

          <div className="about-focus-section">
            <h4 className="about-focus-title">Core Focus &amp; What I Build:</h4>
            <ul className="about-focus-list">
              <li className="about-focus-item">
                <BsArrowRightCircle className="focus-icon" /> Autonomous Multi-Agent Systems &amp; RAG Vector Workflows
              </li>
              <li className="about-focus-item">
                <BsArrowRightCircle className="focus-icon" /> Mission-Critical Enterprise Web Platforms &amp; REST/WebSocket Backends
              </li>
              <li className="about-focus-item">
                <BsArrowRightCircle className="focus-icon" /> Cross-Platform Mobile Apps (React Native &amp; Expo)
              </li>
              <li className="about-focus-item">
                <BsArrowRightCircle className="focus-icon" /> Deep Learning &amp; Computer Vision Inspection Pipelines
              </li>
            </ul>
          </div>

          <div className="about-quote-box">
            <p className="about-quote-text">
              "First, solve the problem. Then, write the code."
            </p>
            <span className="about-quote-author">— Muhammad Abdullah Waseem</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

