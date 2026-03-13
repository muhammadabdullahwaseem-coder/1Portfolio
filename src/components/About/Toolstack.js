import React from "react";
import { Col, Row } from "react-bootstrap";
import Antigravity from "../../Assets/TechIcons/antigravity-color.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Antigravity} alt="Antigravity" className="tech-icon-images" />
        <div className="tech-icons-text">Antigravity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
