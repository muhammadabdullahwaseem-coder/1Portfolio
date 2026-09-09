import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={9} className="home-about-description">
            <h1 className="section-title">
              SYSTEM ARCHITECTURE & <span className="purple">ENGINEERING PHILOSOPHY</span>
            </h1>
            <div className="home-about-body">
              <p>
                I am a <b className="purple">Full-Stack Developer specializing in AI-integrated applications</b>. My work bridges the gap between state-of-the-art AI tooling (multi-agent orchestration, vector RAG pipelines, LLM APIs) and reliable, production-grade software.
              </p>
              
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <div className="card-tag">01. Autonomous AI Systems</div>
                  <h3>Multi-Agent & RAG Architectures</h3>
                  <p>
                    Designing coordinated multi-agent pipelines with <b>CrewAI</b>, contextual vector retrieval using <b>ChromaDB</b>, and rapid inference via <b>Groq & Gemini APIs</b> to automate complex cognitive workflows.
                  </p>
                </div>

                <div className="philosophy-card">
                  <div className="card-tag">02. Production Full-Stack</div>
                  <h3>Resilient Web & Mobile Platforms</h3>
                  <p>
                    Building high-performance client applications with <b>React</b> and <b>React Native / Expo</b>, supported by scalable <b>Node.js, Express</b>, and <b>MongoDB Atlas</b> backends with WebSocket streaming.
                  </p>
                </div>

                <div className="philosophy-card">
                  <div className="card-tag">03. Real-World Impact</div>
                  <h3>Mission-Critical Implementations</h3>
                  <p>
                    From digitizing a 30-year legacy manufacturing factory (Hafiz Bags) to automated computer-vision damage inspection and custom AI proposal generators—I build systems that solve real bottlenecks.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
