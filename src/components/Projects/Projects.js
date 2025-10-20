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
          {(() => {
            const titles = [
              "Roma",
              "Irene",
              "Airis",
              "Ash",
              "Yuri",
              "Ellery",
              "Yulissa",
              "Christine",
              "Sana",
              "Rafael",
              "Calvin",
              "Darcy",
              "Arya",
              "Dar",
              "Ella",
              "Reese",
              "Anshuman",
              "Jiayi",
              "Kasie",
              "Elisa",
            ];

            const images = [
              chatify,
              bitsOfCode,
              editor,
              leaf,
              suicide,
              emotion,
            ];

            return titles.map((t, idx) => (
              <Col key={t} md={4} className="project-card">
                <ProjectCard
                  imgPath={images[idx % images.length]}
                  isBlog={false}
                  title={t}
                  description="Short Description/Artist's statement summarized"
                />
              </Col>
            ));
          })()}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
