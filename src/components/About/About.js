import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={11} className="about-card-col">
              <div className="section-header-block text-center mb-4">
                <div className="section-subtitle-badge">ENGINEERING IDENTITY</div>
                <h1 className="about-main-heading">
                  System Architect &amp; <span className="highlight-term">AI Developer</span>
                </h1>
              </div>
              <Aboutcard />
            </Col>
          </Row>
          <div className="section-header-block text-center mt-5 mb-4">
            <div className="section-subtitle-badge">ENGINEERING CAPABILITIES</div>
            <h1 className="project-heading">
              Technical <strong className="purple">Skillset &amp; Tooling</strong>
            </h1>
            <p className="project-subtext">
              Leading with Autonomous Agentic AI workflows, vector RAG retrieval, and full-stack enterprise systems.
            </p>
          </div>

          <Techstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
