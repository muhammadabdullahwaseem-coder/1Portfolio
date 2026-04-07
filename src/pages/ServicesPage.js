import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Services from "../components/Services/Services";

function ServicesPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Services />
    </Container>
  );
}

export default ServicesPage;
