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
              imgPath={chatify}
              isBlog={false}
              title="Real-Time Chat App"
              description="A seamless real-time messaging application built with Socket.io. It features instant communication capabilities, allowing users to send and receive messages without refreshing the page, demonstrating mastery of WebSockets."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Chat_App"
              demoLink="https://chat-app-socket-io-mj0n.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jwt}
              isBlog={false}
              title="Secure Authentication (JWT)"
              description="A robust login system implementing JSON Web Tokens (JWT) for secure authentication. This project handles user sessions securely, ensuring protected routes and safe data access."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Login-page-JWT"
              demoLink="https://login-page-jwt-1.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudApp}
              isBlog={false}
              title="Online Store Dashboard"
              description="A product management system for an online store featuring full CRUD (Create, Read, Update, Delete) operations. It allows administrators to manage inventory efficiently with a dynamic user interface."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Online-Store-Products"
              demoLink="https://online-store-products.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contextApi}
              isBlog={false}
              title="Theme Switcher (Context API)"
              description="A dynamic theme toggler built using React Context API. This project demonstrates global state management by allowing users to switch between Light and Dark modes seamlessly across the entire application."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Context_API"
              demoLink="https://context-api-taupe.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtk}
              isBlog={false}
              title="Task Manager (Redux Toolkit)"
              description="An efficient task management application utilizing Redux Toolkit. It showcases scalable state management, allowing for predictable state updates and a smooth user experience for managing daily tasks."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Redux-Toolkit"
              demoLink="https://reduxtoolkitbymrab.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rating}
              isBlog={false}
              title="Interactive Rating App"
              description="A user-friendly feedback component that allows users to select and submit ratings. This project focuses on interactive UI design and handling user input states effectively."
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
