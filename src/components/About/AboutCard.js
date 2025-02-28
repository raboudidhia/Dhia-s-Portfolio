import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Mohamed Dhia Raboudi</span>,
    a second-year software engineering student at  
    <span className="purple"> École Nationale d’Ingénieurs de Tunis.</span>
    <br />
    I am passionate about modern technologies, particularly  
    <span className="purple"> Artificial Intelligence, Machine Learning,</span>{' '}  
    and <span className="purple"> Deep Learning.</span>
    <br />
    My goal is to continuously develop my skills and expand my knowledge,  
    while aiming to apply my technical expertise in a stimulating environment  
    to contribute to innovative and impactful projects.
    <br />
    <br />
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Exploring AI advancements
    </li>
    <li className="about-activity">
      <ImPointRight /> Learning about Cloud Computing
    </li>
    <li className="about-activity">
      <ImPointRight /> Experimenting with new technologies
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make an impact!"{" "}
  </p>
  <footer className="blockquote-footer">Mohamed Dhia Raboudi</footer>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
