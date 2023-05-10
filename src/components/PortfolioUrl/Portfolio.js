import React from "react";
import { Container } from "react-bootstrap";
import "./Portfolio.css";

const PortfolioUrl = () => {
  return (
    <Container>
      <div className="portfolio-section">
        <div className="portfolio-text-heading">
          <span className="cap-letter">P</span>ortfolio Links
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://resumeupgraders.com/" target="_blank">1. Resume Upgraders (Take your resume to the next level).</a>
          <div className="desc-text pl-3">Using HTML,CSS,Bootstrap 4, & JavaScript</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://artefy.io/" target="_blank">2. Welcome to Artefy (Find works, and communities that relate to you. From fantasy art to music to sport or gaming, wherever your passion lives, Artefy has you covered).</a>
          <div className="desc-text pl-3">Using ReactJS,scss,React-Bootstrap, NPM Libraries</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://sigmagosolutions.com/" target="_blank">3. SigmaGo Solutions (ITSM systemfor End-users and technicians).</a>
          <div className="desc-text pl-3">Using ReactJS, MVC, React-Bootstrap, JavaScript, Particle.js</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://piqsol.com/" target="_blank">4. Piqsol</a>
          <div className="desc-text pl-3">Using ReactJS, Material UI, Bootstrap 4, & TypeScript</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://index.hape.io/" target="_blank">5. HAPE | FASHION INDEX</a>
          <div className="desc-text pl-3">Using React JS, scss, Nexxt JS, Motion Animation Library</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://zombies.arhamsoft.org/" target="_blank">6. Zombies Marketplace</a>
          <div className="desc-text pl-3">Using React JS,CSS,React-Bootstrap, & JavaScript</div>
        </div>
        <div className="urls">
          <a className="portfolio-link" href="https://www.theguardian.com/international" target="_blank">7. The Guardian (News Feeds Style).</a>
          <div className="desc-text pl-3">Using ReactJS,React-Bootstrap & JavaScript</div>
        </div>
         <div className="urls">
          <a className="portfolio-link" href="https://job-listing-eta-one.vercel.app/" target="_blank">8. Job Listing View</a>
          <div className="desc-text pl-3">Using ReactJS, React-Bootstrap, Responsiveness   & JavaScript</div>
        </div>
      </div>
    </Container>
  );
};
export default PortfolioUrl;
