import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import contextApi from "../../Assets/Projects/context-api.webp";
import rating from "../../Assets/Projects/rating.webp";
import crudApp from "../../Assets/Projects/crud-app.webp";
import chatify from "../../Assets/Projects/chatify.webp";
import rtk from "../../Assets/Projects/rtk.webp";
import jwt from "../../Assets/Projects/jwt.webp";
import nexlink from "../../Assets/Projects/nexlink.png";
import solar from "../../Assets/Projects/solar.webp";
import yt from "../../Assets/Projects/yt.webp";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt}
              isBlog={false}
              title="Youtube Clone"
              description="A responsive video streaming interface replicating YouTube. It integrates RapidAPI to fetch dynamic video feeds and live search results, utilizing a sleek mobile-first React and Tailwind layout."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Youtube-clone"
              demoLink="https://youtube-clone-by-mrab.vercel.app"
            />
          </Col>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtk}
              isBlog={false}
              title="Task Manager (Redux Toolkit)"
              description="A task management app powered by Redux Toolkit for predictable state handling, letting users create, update, track, and organize daily tasks efficiently."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Redux-Toolkit"
              demoLink="https://reduxtoolkitbymrab.netlify.app"
            />
          </Col>
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contextApi}
              isBlog={false}
              title="Theme Switcher (Context API)"
              description="A React project that uses Context API for global state management, allowing users to switch smoothly between light and dark themes across the app."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Context_API"
              demoLink="https://context-api-taupe.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rating}
              isBlog={false}
              title="Interactive Rating App"
              description="An interactive rating component that lets users choose and submit feedback while showcasing clean UI behavior, state handling, and responsive interaction design."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Rating-App"
              demoLink="https://rating-app-five-rho.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
