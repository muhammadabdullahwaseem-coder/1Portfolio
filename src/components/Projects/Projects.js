import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Media Assets
import sharpenPromptImg from "../../Assets/Projects/sharpen-prompt.png";
import proposalGenImg from "../../Assets/Projects/proposal-generator.png";
import hafizBagsImg from "../../Assets/Projects/hafiz-bags.png";
import vehicleDamageImg from "../../Assets/Projects/vehicle-damage.png";
import nexlink from "../../Assets/Projects/nexlink.png";
import chatify from "../../Assets/Projects/chatify.webp";
import solar from "../../Assets/Projects/solar.webp";
import githubCtaImg from "../../Assets/Projects/github-cta.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="section-header-block text-center">
          <div className="section-subtitle-badge">PORTFOLIO &amp; CASE STUDIES</div>
          <h1 className="project-heading">
            Featured <strong className="hero-title-gradient">Engineering Systems</strong>
          </h1>
          <p className="project-subtext">
            Production multi-agent AI pipelines, enterprise full-stack applications, and interactive web software solving specific operational bottlenecks.
          </p>
        </div>

        {/* 3-Column Spacious Grid (3 cards per row on desktop, left-aligned last row) */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. Sharpen Prompt */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={sharpenPromptImg}
              category="Prompt Engineering / LLMs"
              title="Sharpen Prompt"
              description="An intelligent prompt engineering and refinement utility designed to structure, benchmark, and optimize system instructions for high-reasoning LLMs, eliminating ambiguity and output hallucinations."
              technologies={["Prompt Engineering", "LLM Optimization", "React", "Python"]}
              demoLink="https://sharpen-prompt.vercel.app/"
            />
          </Col>

          {/* 2. Upwork Proposal Generator */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={proposalGenImg}
              category="Multi-Agent System & RAG"
              title="Upwork Proposal Generator"
              description="Solves proposal fatigue and low win rates by ingesting client briefs and querying past winning bids in ChromaDB to generate hyper-tailored proposals via coordinated CrewAI agents."
              technologies={[
                "CrewAI",
                "ChromaDB (RAG)",
                "Groq / Gemini",
                "Streamlit",
                "Python",
              ]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder/UpWork-proposal-writter"
              demoLink="https://upwork-proposal-writter.streamlit.app/"
            />
          </Col>

          {/* 3. Hafiz Bags Factory Management App */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={hafizBagsImg}
              category="Enterprise Mobile & ERP"
              title="Hafiz Bags Factory Management"
              description="Replaced manual paper logs and fragmented tracking with a phased digital factory operations system for inventory, assembly line cutting/stitching, and order dispatch for a manufacturing business (est. 1993)."
              technologies={[
                "React Native",
                "Expo",
                "MongoDB Atlas",
                "Node.js",
                "System Architecture",
              ]}
              statusLabel="Private Client Project // Est. 1993"
            />
          </Col>

          {/* 4. Vehicle Damage Detection DL Project */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={vehicleDamageImg}
              category="Computer Vision & Deep Learning"
              title="Vehicle Damage Detection (DL)"
              description="Automates exterior vehicle inspection and localized part damage classification using deep learning computer vision to expedite insurance claims triage and fleet condition assessment."
              technologies={[
                "Deep Learning",
                "Computer Vision",
                "PyTorch",
                "FastAPI",
                "Python",
              ]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Vehicle-Damage-Detection-system"
              demoLink="https://vehicle-damage-detection-system-dl.streamlit.app"
            />
          </Col>

          {/* 5. Nex-Link (URL Shortener & QR) */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={nexlink}
              category="Full-Stack Web App"
              title="Nex-Link (URL Shortener & QR)"
              description="Streamlines marketing campaigns and asset distribution by converting bulky URLs into trackable, branded links with instant downloadable high-resolution QR codes."
              technologies={["React.js", "Node.js", "Express", "MongoDB", "REST APIs"]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Nex-Link"
              demoLink="https://link-shortener-by-mrab.onrender.com"
            />
          </Col>

          {/* 6. Real-Time Chat Application */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              category="Distributed Real-Time Systems"
              title="Real-Time Chat Application"
              description="Eliminates messaging delays and request polling through persistent bi-directional WebSockets, delivering zero-latency instant messaging and presence detection."
              technologies={["Socket.io", "Node.js", "React.js", "Express", "WebSockets"]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Chat_App"
              demoLink="https://chat-app-socket-io-mj0n.onrender.com"
            />
          </Col>

          {/* 7. 3D Solar System Explorer */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={solar}
              category="Interactive 3D / WebGL"
              title="3D Solar System Explorer"
              description="Bridges educational astrophysics and immersive web graphics by rendering interactive, real-time 3D planetary orbits and gravitational dynamics directly in the browser."
              technologies={["Three.js", "WebGL", "React.js", "CSS3 Animations"]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder/solar_system"
              demoLink="https://solar-system-by-abdullah.vercel.app"
            />
          </Col>

          {/* 8. More on GitHub CTA Card */}
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={githubCtaImg}
              category="Open Source & Labs"
              title="More on GitHub"
              description="Additional experiments, tutorials, and smaller builds"
              technologies={["Open Source", "Algorithms", "Agent Workflows", "Experiments"]}
              ghLink="https://github.com/muhammadabdullahwaseem-coder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
