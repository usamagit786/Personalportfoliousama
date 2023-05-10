import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {GoMail} from 'react-icons/go'
import "./Contact.css";

const ContactMe = () => {
  return (
    <Container>
        <div className="contact-section">
      <div className="contact-heading"><span className="cap-letter">C</span>ontact Me</div>
      <div className="container-contact">
        <span className="white-text">If you enjoyed</span> my portfolio and <span className="white-text">want to chat about an idea or a job,</span> please <span className="white-text">contact me </span>through one these channels:
        <div className="flex-container">
            <div>
            <a style={{color: '#cbcbcb'}} href="https://www.linkedin.com/in/usama-tariq-4890161a4/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
            </div>
            <div>
            <a style={{color: '#cbcbcb'}} href="mailto:tariqusama597@gmail.com" target="_blank" rel="noreferrer"><GoMail size={26} /></a>
            </div>
            <div>
            <a style={{color: '#cbcbcb'}} href="https://wa.me/+923340402291" target="_blank" rel="noreferrer"><FaWhatsapp size={24} /></a>
            </div>
        </div>
      </div>
        </div>
    </Container>
  );
};
export default ContactMe;
