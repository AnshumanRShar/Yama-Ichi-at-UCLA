import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.avif";
import Tilt from "react-parallax-tilt";

function Home2() {
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

S*%t happens. Didn't used to. Like when some small off-handed private comment turns into an SNS flame war. Or worrying about not getting enough “Likes”. The Youtube videos you can't watch anymore because somebody complained. Or the apps you can't play because they were rejected by Apple. Once upon a time, the Internet was supposed to be a place for "liberty". Nowadays it's so uptight. So let's turn off, log-out, and drop in, on the real world. The Internet Yami-Ichi is a flea market for “browsing” face-to-face. Take your own Internet liberties* here, with us. * But no dangerous or illegal goods, please! This black market wants to remain free and useful!
Internet Yami-ichi* (Internet Black Market) is flea market-style event for buying and selling internet-ish goods and services in real life.
The internet is not what it used to be. Especially with the rise of social media, and ubiquitous smart-phones permanently on-line, our off-line lives have become increasingly inter-dependent upon our on-line lives. The organization of this much of society on this common infrastructure necessitates the establishment of rules which have made it a lot more uptight.
The Internet Yami-ichi was born from our inalienable right to turn off, log out, and meet up, and enjoy what we want in an un-monitored new space, and confirm that everything that we enjoyed on-line was put there by one of us, and we can enjoy it together off-line too.
Like the early Internet, the Yami-Ichi atmosphere is rich with irony and humor. The best of what we share and exchange at the Yami-Ichi is popular for being witty, playful, provocative.
After the first event started in 2012, it has been spreading to 12 cities in the world, such as Tokyo, Berlin, Brussels, Amsterdam and New York.*Yami-Ichi means black market in Japanese, and the word Yami also implies "sick for" and "addicted to". We call it black market only because "when we see the internet as the front distribution, that makes the "reality" the back distribution", not because we want to break the law. Ours is a bright black market without illegal stuff.
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              <br />
              <br />
              <i>
                <b className="purple">
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
