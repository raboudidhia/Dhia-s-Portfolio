import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.jpeg";
import suicide from "../../Assets/Projects/suicide.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="An AI-Powered Image Generation Platform"
              description=" PixelDreamer is a full-stack web application that allows users to generate unique images using AI-powered text prompts. Users can also share their creations with a community and explore posts from others. Built with modern technologies, this app showcases the power of AI in creative applications."
              ghLink="https://github.com/raboudidhia/Image-generativ.git"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jakarta EE Cinema Reservation Web App"
              description="A web application for managing cinema ticket reservations, built using Jakarta EE for the backend. The project includes user session management, online ticket booking, and secure payment processing. The frontend was developed with REACT, while MySQL was used for database management. This project provided hands-on experience in developing scalable and secure web applications with enterprise-level technologies."
              ghLink="https://github.com/raboudidhia/BookingSystem.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-Based Rabies Detection and Veterinary Assistance Web Application"
              description="A web app aiding veterinarians in detecting rabies in dogs via machine learning. Users can upload images for automated analysis, while the platform also offers insights on common dog diseases, treatments, and pet care. Built with React and Spring Boot, it integrates deep learning models for enhanced diagnostics."
              ghLink="https://github.com/raboudidhia/FrontOfPfa"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Java Search Engine"
              description="A simple search engine built in Java, focusing on indexing and searching text-based data efficiently using algorithms like keyword matching and ranking."
              ghLink="https://github.com/raboudidhia/moteurderecherche.git"
                          
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="L’Hippocrate – Coworking Space Management Platform"
              description="A modern web platform designed for L’Hippocrate, a professional coworking space. The application facilitates room reservations, provides details about available services, and streamlines contact management. Built with React (frontend) and Node.js (backend)"
              ghLink="https://github.com/raboudidhia/Hippocrate-vitrine"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Network Simulations"
              description="Simulations of network configurations and device setups, providing insights into network topologies and communication protocols."
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
