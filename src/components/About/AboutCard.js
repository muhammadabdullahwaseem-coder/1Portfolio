import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Abdullah Waseem </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am currently a passionate{" "}
            <span className="purple">Frontend Developer</span> looking for
            internship opportunities.
            <br />I am pursuing a Diploma in Web Development with AI at{" "}
            <span className="purple">Nexskill (Arfa Tower)</span> and completing
            my ICS at <span className="purple">Punjab College</span>.
            <br />
            <br />
            Apart from coding, I love to create and build things!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Custom Perfumes 
            </li>
            <li className="about-activity">
              <ImPointRight /> DIY Electronics & Battery Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Android Customization & Troubleshooting
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating and designing websites and applications
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "First, solve the problem. Then, write the code."{" "}
          </p>
          <footer className="blockquote-footer">
            Muhammad Abdullah Waseem
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
