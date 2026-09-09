import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  const hasDemo = Boolean(props.demoLink);
  const hasGh = Boolean(props.ghLink);
  const bothButtons = hasDemo && hasGh;
  const singleButton = (hasDemo && !hasGh) || (!hasDemo && hasGh);
  const noButtons = !hasDemo && !hasGh;

  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      {/* Visual Media Header */}
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
        {props.category && (
          <span className="card-category-pill">{props.category}</span>
        )}
      </div>

      <Card.Body className="d-flex flex-column flex-grow-1">
        <div className="card-header-row">
          <Card.Title className="project-title">{props.title}</Card.Title>
        </div>

        {/* Problem-first One-Sentence Description */}
        <Card.Text className="project-desc">
          {props.description}
        </Card.Text>

        {/* Tech Stack Badges */}
        {props.technologies && props.technologies.length > 0 && (
          <div className="project-tech-badges">
            {props.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Links / Status pinned to the bottom */}
        <div className="project-card-footer mt-auto">
          {(hasDemo || hasGh) && (
            <div className="project-card-actions">
              {hasDemo && (
                <a
                  href={props.demoLink}
                  target="blank"
                  rel="noreferrer"
                  className="btn-card-action btn-card-demo"
                >
                  <BsBoxArrowUpRight />
                  <span>Live Demo</span>
                </a>
              )}

              {hasGh && (
                <a
                  href={props.ghLink}
                  target="blank"
                  rel="noreferrer"
                  className="btn-card-action btn-card-code"
                >
                  <BsGithub />
                  <span>GitHub</span>
                </a>
              )}

              {/* In-line status note if only 1 button exists */}
              {props.statusNote && singleButton && (
                <span className="card-status-note ms-auto">
                  {props.statusNote}
                </span>
              )}
            </div>
          )}

          {/* Dedicated full-width status line when both buttons exist */}
          {props.statusNote && bothButtons && (
            <div className="card-status-line-bottom">
              <span className="card-status-note">
                {props.statusNote}
              </span>
            </div>
          )}

          {/* Cards with no action links (e.g. Private Client Project // Est. 1993) */}
          {noButtons && (
            <div className="card-status-line">
              <span className="card-status-note">
                {props.statusLabel || props.statusNote || "Private Client Project"}
              </span>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
