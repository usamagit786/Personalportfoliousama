import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillComponent from "./SkillComponent";
import "./Skills.css";

const Skill = () => {
  return (
    <Container>
      <div className="skill-section">
        <div className="skill-heading">
          <span className="cap-letter">S</span>kills
        </div>
        <Row>
          <Col md={4} sm={6}><SkillComponent title="HTML" percentage="100%" now="100"/></Col>
          <Col md={4} sm={6}><SkillComponent title="REACT JS" percentage="90%" now="90"/></Col>
          <Col md={4} sm={6}><SkillComponent title="CSS" percentage="100%" now="100"/></Col>
          <Col md={4} sm={6}><SkillComponent title="Java Script" percentage="85%" now="85"/></Col>
          <Col md={4} sm={6}><SkillComponent title="TailwindCss" percentage="95%" now="95"/></Col>
          <Col md={4} sm={6}><SkillComponent title="TypeScript" percentage="85%" now="85"/></Col>
          <Col md={4} sm={6}><SkillComponent title="MaterialUI" percentage="95%" now="95"/></Col>
          <Col md={4} sm={6}><SkillComponent title="React-Bootstrap" percentage="95%" now="95"/></Col>
        </Row>
        <div className="skills-wrapper">
          <div className="other-skill">Other Skills:</div>
          <div className="other-skill">KeyFrames Animation | NPM | Yarn | Bootstrap | HTML5 | Substrate Front-End | Ant-Design | CSS3 | Bootstrap 4-5 | Styled Component | Redux | Jira Atlassian | Github | Agile Methodologies | API Calling | etc.
          </div>
        </div>
      </div>
      <div className="certificate-section">
        <div className="certificate-heading"><span className="cap-letter">C</span>ertificates</div>
        <div className="desc">_Modern Web Development with Javascript and React JS<span className="desc-bold">| Udemy</span></div>
        <div className="desc">_Web Development Basics<span className="desc-bold">| The GameStorm Studio</span></div>
      </div>
    </Container>
  );
};
export default Skill;
