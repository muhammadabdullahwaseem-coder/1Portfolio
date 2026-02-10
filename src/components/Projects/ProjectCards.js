import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {}
      {}
      <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="blue-electric-filter" x="-20%" y="-20%" width="140%" height="140%">
            {}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.03" 
              numOctaves="4" 
              seed="5" 
              result="noise" 
            />
            {}
            <feOffset in="noise" dx="0" dy="0" result="movingNoise">
              <animate 
                attributeName="dx" 
                values="0; -100" 
                dur="1s" 
                repeatCount="indefinite" 
              />
               <animate 
                attributeName="dy" 
                values="0; 100" 
                dur="2s" 
                repeatCount="indefinite" 
              />
            </feOffset>
            {}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="movingNoise" 
              scale="8" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>
      {}

      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;