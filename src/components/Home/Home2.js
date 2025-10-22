import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.avif";
import Tilt from "react-parallax-tilt";

function Home2() {
  const students = [
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
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Description 
            </h1>
            <p className="home-about-body">
              Internet Yami-ichi

The class DMA 111 - Art and the Internet presents to you Yami-Ichi
In a class that explores internet culture, its development, and current presence, each student has focused on a theme that dissects a particular dialogue of the web.
From identity to privacy, different matters are discussed through a flea market of trading goods. Attendees are encouraged to bring a mobile device, given that objects in the stands aren’t limited to the physical, some also live digitally.
              <br />
              <br />

Read about some of the Yami-Ichi students’ work:
              <br />
              <br />

Glitter gifs, all shades of pink, and dubious ads— go back to the landscape of early 2010’s online girls games! The space targeting young girls online reflected society’s standards for women, thin, white, blonde, heterosexual, and cisgender. In these games, kids were allowed to play with gender, but the options were always strictly feminine. As a trans man, I wanted to make a game that reflected my pretransition experience growing up as a queer girl playing these games, but replace the barbie aesthetic with stereotypical trans masc clothing at the time.
              <br />
~Ash
              <br />
              <br />

EmoMart™ is a fictional convenience store where emotions are packaged, priced, and sold like everyday products. Each receipt records a different feeling — anger, anxiety, sadness, or happiness — triggered by real posts and phrases circulating online. By turning fleeting digital emotions into tangible transactions, EmoMart™ reflects how the internet commodifies feelings, transforming genuine human experiences into consumable moments for clicks, likes, and validation.
              <br />
~Jiayi
              <br />
              <br />

Book*’s contents consist of the terms of service dictating its purchase. Users can either read through the entire terms and conditions to decrypt the key and earn the book, or blindly sign at the end of the document— binding them to pay a sum unknown to them until their signature. The project reflects the predatory Terms of Service and EULAs that govern our lived experiences in both hardware and software.
              <br />
~Calvin McClure
              <br />

              <br />
              <i>
                <b className="blue">
                  {" "}
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="blue">
                  {" "}
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <div
              className="student-names"
              style={{ marginTop: "1rem", textAlign: "center", color: "white" }}
            >
              {students.map((s) => (
                <div key={s} style={{ fontWeight: 500, lineHeight: 1.4 }}>
                  {s}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
