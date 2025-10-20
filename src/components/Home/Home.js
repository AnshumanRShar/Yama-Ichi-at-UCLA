import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/EDAroom.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to UCLA's very own{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Internet Yama-Ichi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>View Student Projects</h1>
            <p>
              Learn more about Yama-Ichi and <span className="purple">view student projects </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
