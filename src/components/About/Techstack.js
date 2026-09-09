import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiRobot2Line, RiBrainLine, RiDatabase2Line } from "react-icons/ri";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiStreamlit,
  SiExpo,
  SiFastapi,
  SiSocketdotio,
  SiGit,
} from "react-icons/si";
import { BsCpu, BsTerminal, BsLightningCharge, BsLayers } from "react-icons/bs";

const skillCategories = [
  {
    category: "AI & Autonomous Agent Workflows (Core Specialization)",
    accent: "ai-accent",
    skills: [
      { name: "CrewAI Multi-Agent", icon: <RiRobot2Line />, tag: "Orchestration" },
      { name: "RAG & Vector Retrieval", icon: <RiBrainLine />, tag: "Semantic Search" },
      { name: "ChromaDB / Vector DBs", icon: <RiDatabase2Line />, tag: "Embeddings" },
      { name: "Groq & Gemini APIs", icon: <BsLightningCharge />, tag: "Fast Inference" },
      { name: "Python", icon: <SiPython />, tag: "Core AI Language" },
      { name: "Prompt Engineering", icon: <BsTerminal />, tag: "System Design" },
      { name: "Streamlit", icon: <SiStreamlit />, tag: "AI Prototyping" },
      { name: "FastAPI", icon: <SiFastapi />, tag: "AI Microservices" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    accent: "backend-accent",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, tag: "Runtime" },
      { name: "Express.js", icon: <BsLayers />, tag: "REST APIs" },
      { name: "MongoDB Atlas", icon: <SiMongodb />, tag: "NoSQL DB" },
      { name: "Socket.io", icon: <SiSocketdotio />, tag: "Real-Time Sockets" },
      { name: "RESTful Architecture", icon: <BsCpu />, tag: "Services" },
    ],
  },
  {
    category: "Frontend & Mobile Applications",
    accent: "frontend-accent",
    skills: [
      { name: "React.js", icon: <SiReact />, tag: "Web Client" },
      { name: "React Native / Expo", icon: <SiExpo />, tag: "Cross-Platform Mobile" },
      { name: "Modern JavaScript", icon: <SiJavascript />, tag: "ES6+" },
      { name: "CSS3 & Modern UI", icon: <BsLayers />, tag: "Responsive Systems" },
    ],
  },
  {
    category: "DevOps & Developer Tooling",
    accent: "tools-accent",
    skills: [
      { name: "Docker", icon: <SiDocker />, tag: "Containers" },
      { name: "Postman", icon: <SiPostman />, tag: "API Verification" },
      { name: "Git & GitHub", icon: <SiGit />, tag: "Version Control" },
    ],
  },
];

function Techstack() {
  return (
    <div className="skills-architecture-container">
      {skillCategories.map((group, groupIdx) => (
        <div key={groupIdx} className={`skill-category-group ${group.accent}`}>
          <div className="category-header-title">
            <span className="category-marker"></span>
            <h3>{group.category}</h3>
          </div>

          <Row className="skill-grid-row">
            {group.skills.map((skill, skillIdx) => (
              <Col key={skillIdx} xs={6} sm={4} md={3} lg={3} className="skill-card-col">
                <div className="skill-badge-card">
                  <div className="skill-icon-wrap">{skill.icon}</div>
                  <div className="skill-text-wrap">
                    <span className="skill-title">{skill.name}</span>
                    <span className="skill-tag">{skill.tag}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;

