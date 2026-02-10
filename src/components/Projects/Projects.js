import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




import leaf from "../../Assets/Projects/leaf.png"; 
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          
          {/* 1. Chat App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} /* Replace with: chatImg */
              isBlog={false}
              title="Real-Time Chat App"
              description="A seamless real-time messaging application built with Socket.io. It features instant communication capabilities, allowing users to send and receive messages without refreshing the page, demonstrating mastery of WebSockets."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Chat_App"
              demoLink="https://chat-app-socket-io-mj0n.onrender.com"
            />
          </Col>

          {/* 2. Login Page (JWT) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode} /* Replace with: loginImg */
              isBlog={false}
              title="Secure Authentication (JWT)"
              description="A robust login system implementing JSON Web Tokens (JWT) for secure authentication. This project handles user sessions securely, ensuring protected routes and safe data access."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Login-page-JWT"
              demoLink="https://login-page-jwt-1.onrender.com"
            />
          </Col>

          {/* 3. CRUD Operations */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} /* Replace with: storeImg */
              isBlog={false}
              title="Online Store Dashboard"
              description="A product management system for an online store featuring full CRUD (Create, Read, Update, Delete) operations. It allows administrators to manage inventory efficiently with a dynamic user interface."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Online-Store-Products"
              demoLink="https://online-store-products.onrender.com"
            />
          </Col>

          {/* 4. Theme Switcher */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf} /* Replace with: themeImg */
              isBlog={false}
              title="Theme Switcher (Context API)"
              description="A dynamic theme toggler built using React Context API. This project demonstrates global state management by allowing users to switch between Light and Dark modes seamlessly across the entire application."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Context_API"
              demoLink="https://context-api-taupe.vercel.app"
            />
          </Col>

          {/* 5. Redux Toolkit Task Manager */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide} /* Replace with: reduxImg */
              isBlog={false}
              title="Task Manager (Redux Toolkit)"
              description="An efficient task management application utilizing Redux Toolkit. It showcases scalable state management, allowing for predictable state updates and a smooth user experience for managing daily tasks."
              ghLink="https://github.com/muhammadabdullahwaseem-coder/Redux-Toolkit"
              demoLink="https://reduxtoolkitbymrab.netlify.app"
            />
          </Col>

          {/* 6. Rating App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion} /* Replace with: ratingImg */
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