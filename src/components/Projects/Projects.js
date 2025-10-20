import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/placeholdOne.jpg";
import emotion from "../../Assets/Projects/placeholdTwo.jpg";
import editor from "../../Assets/Projects/placeholdThree.jpg";
import chatify from "../../Assets/Projects/placeholdFour.jpg";
import suicide from "../../Assets/Projects/placeholdFive.jpg";
import bitsOfCode from "../../Assets/Projects/placeholdSix.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Student Projects 
        </h1>
        <p style={{ color: "white" }}>
          Short description...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Short Description/Artist's statement summarized"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Short Description/Artist's statement summarized"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Short Description/Artist's statement summarized"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Short Description/Artist's statement summarized"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Short Description/Artist's statement summarized"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
                            description="Short Description/Artist's statement summarized"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
