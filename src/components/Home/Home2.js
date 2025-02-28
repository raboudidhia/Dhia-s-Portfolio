import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dhia11.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn , FaFacebookF  } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My field of interest lies in building innovative {' '}
              <i>
                <b className="purple">AI-powered applications</b> and exploring
                advancements in {' '}
                 <b className="purple">Deep Learning</b>.
              </i>
              <br />
              <br />I am also passionate about integrating AI with {' '}
              <b className="purple">Web Technologies</b> and leveraging {' '}
              <i>
                <b className="purple">Cloud Computing</b>
              </i> {' '}
              to deploy scalable and intelligent solutions.
              <br />
              <br />I am already familiar with {' '}
              <b className="purple">React.js</b> and {' '}
              <b className="purple">Next.js</b>, and I apply my expertise in
              {' '}<b className="purple">Python</b> for AI development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="dhia11" style={{ maxWidth: "80%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raboudidhia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhia-raboudi-90686a2b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/dhia.raboudi/?locale=fr_FR"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhia.raboudi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
