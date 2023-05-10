import React from "react";
import { Container } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero-section">
        <div>
          <span className="cap-letter">H</span>ELLO, <span className="cap-letter">I</span>'M{" "}
          <span className="cap-letter">U</span>SAMA!
        </div>
        <span className="cap-letter">S</span>R.<span className="cap-letter">F</span>RONT-END REACT
        JS DEVELOPER
      </div>
    </Container>
  );
};
export default HeroSection;
