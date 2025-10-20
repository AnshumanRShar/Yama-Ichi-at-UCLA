import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BroadOne from "../../Assets/BroadOne.jpg";
import BroadTwo from "../../Assets/BroadTwo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setImgIndex((i) => (i === 0 ? 1 : 0)), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header order-2 order-md-1">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to UCLA's very own{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Internet Yami-Ichi</strong>
              </h1>
              <div className="light-text" style={{ paddingLeft: 45 }}>
                <div><br />EDA room at Broad</div>
                <div>Oct 22nd, 2025 <br /> 1-2pm</div>
              </div>
              

              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                  maxWidth: 620,
                  boxSizing: "border-box",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5} className="myAvtar order-1 order-md-2" style={{ paddingBottom: 20 }}>
              <div className="crossfade-container">
                <img
                  src={BroadOne}
                  alt="Broad One"
                  className={`crossfade-img ${imgIndex === 0 ? "visible" : "hidden"}`}
                />
                <img
                  src={BroadTwo}
                  alt="Broad Two"
                  className={`crossfade-img ${imgIndex === 1 ? "visible" : "hidden"}`}
                />
              </div>
            </Col>
          </Row>
         
        </Container>
      </Container>
      <Home2 />

    </section>
  );
}

export default Home;
