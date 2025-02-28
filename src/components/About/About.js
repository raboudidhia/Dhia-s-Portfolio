import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./SoftSkills";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/dhia2.jpeg";
import Toolstack from "./Toolstack";
import SoftSkills from "./SoftSkills";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="dhia2" className="img-fluid" style={{ maxWidth: "70%" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Soft </strong> Skills
        </h1>

        <SoftSkills />
        <h1 className="project-heading">
          Hard <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        
      </Container>
    </Container>
  );
}

export default About;
