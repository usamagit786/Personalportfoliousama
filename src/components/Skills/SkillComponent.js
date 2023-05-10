import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import "./Skills.css";

const SkillComponent = ({title, percentage, now}) => {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="progress-wrapper">
      <ProgressBar now={now} />
      </div>
      <div className="percentage">{percentage}</div>
    </Container>
  );
}
export default SkillComponent;