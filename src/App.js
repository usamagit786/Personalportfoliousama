import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import About from "./components/About/About";
import ContactMe from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PortfolioUrl from "./components/PortfolioUrl/Portfolio";
import Skill from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="parent-container">
      <Container className="portfolio-heading pb-5">
        Portfolio 
      </Container>
      <Container className="container-border-shadow">
        <Navbar />
        <HeroSection />
        <About />
        <Skill />
        <WorkExperience />
        <PortfolioUrl />
        <ContactMe />
      </Container>
    </div>
  );
}

export default App;
