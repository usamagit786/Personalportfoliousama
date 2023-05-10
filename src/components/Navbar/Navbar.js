import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Navbar.css";

const NavbarPortfolio = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <div className="flex-wrapper">
            <div className="phone-text">
              <svg
                width="23"
                height="23"
                color="#cbcbcb"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="mobile"
                class="svg-inline--fa fa-mobile fa-w-10 fa-shake "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                ></path>
              </svg>
            <span style={{ padding: '0px 10px'}}>+92 334 0402291</span>
            </div>
            <div className="email-text">
              <svg
                width="23"
                height="23"
                color="#cbcbcb"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="svg-inline--fa fa-envelope fa-w-16 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
            <a style={{color: '#9E9E9E', padding: '0px 10px'}} href="mailto:tariqusama587@gmail.com" target="_blank" rel="noreferrer">tariqusama587@gmail.com</a>
            </div>
          </div>
      </Navbar>
    </Container>
  );
};
export default NavbarPortfolio;
