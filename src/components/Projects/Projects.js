import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tonysHeadlight from "../../Assets/Projects/tonys-headlight.png";
import silvasDetailing from "../../Assets/Projects/silvas-detailing.png";
import chatify from "../../Assets/Projects/chatify.webp";
import nexlink from "../../Assets/Projects/nexlink.png";
import crudApp from "../../Assets/Projects/crud-app.webp";
import solar from "../../Assets/Projects/solar.webp";
import jwt from "../../Assets/Projects/jwt.webp";
import rtk from "../../Assets/Projects/rtk.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 1 — Tony's Headlight Restoration */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tonysHeadlight}
              isBlog={false}
              title="Tony's Headlight Restoration"
              description="A conversion-focused website for a mobile headlight restoration business in Los Angeles. Built with service tiers and pricing, before/after results gallery, online booking flow, customer reviews, and fully responsive mobile-first design."
              demoLink="https://tonys-headlight-restoration.vercel.app"
            />
          </Col>

          {/* 2 — Silva's Mobile Detailing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={silvasDetailing}
              isBlog={false}
              title="Silva's Mobile Detailing"
              description="A professional service website for a mobile car detailing business serving the LA and Orange County area. Features service listings, booking functionality, and a clean conversion-focused layout built for local customers."
              demoLink="https://silvas-detailing-main.vercel.app"
            />
          </Col>

          {/* 3 — Real-Time Chat App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-Time Chat App"
              description="A real-time messaging app built with Socket.io that delivers instant communication, live updates, and smooth chat experience without requiring page refreshes."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Chat_App"
              demoLink="https://chat-app-socket-io-mj0n.onrender.com"
            />
          </Col>

          {/* 4 — Link Shortener (Nex-Link) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexlink}
              isBlog={false}
              title="Link Shortener (Nex-Link)"
              description="A MERN-based URL shortener that converts long links into compact shareable URLs and generates downloadable QR codes through a clean, practical interface."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Nex-Link"
              demoLink="https://link-shortener-by-mrab.onrender.com"
            />
          </Col>

          {/* 5 — Online Store Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudApp}
              isBlog={false}
              title="Online Store Dashboard"
              description="A comprehensive admin dashboard for managing online store products with full CRUD operations. It provides an intuitive, responsive interface making it incredibly easy to add, edit, and organize inventory."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Online-Store-Products"
              demoLink="https://online-store-products.onrender.com"
            />
          </Col>

          {/* 6 — Solar System Explorer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Solar System Explorer"
              description="An interactive React.js application simulating the solar system. It features smooth CSS3 orbital animations and maps complex astronomical data to responsive UI components for exploring planets."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/solar_system"
              demoLink="https://solar-system-by-abdullah.vercel.app"
            />
          </Col>

          {/* 7 — Secure Authentication (JWT) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jwt}
              isBlog={false}
              title="Secure Authentication (JWT)"
              description="A secure authentication system using JSON Web Tokens to manage login, signup, protected routes, and user sessions with reliable access control."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Login-page-JWT"
              demoLink="https://login-page-jwt-1.onrender.com"
            />
          </Col>

          {/* 8 — Task Manager (Redux Toolkit) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtk}
              isBlog={false}
              title="Task Manager (Redux Toolkit)"
              description="A task management app powered by Redux Toolkit for predictable state handling, letting users create, update, track, and organize daily tasks efficiently."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Redux-Toolkit"
              demoLink="https://reduxtoolkitbybyntab.netlify.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
