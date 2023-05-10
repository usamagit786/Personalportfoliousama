import React from "react";
import { Container } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <Container>
      <div className="work-section">
        <div className="work-heading">
          <span className="cap-letter">W</span>ork Experiences
        </div>
        <div className="timeline-wrapper">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="2021 - present"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Sr. Front-End ReactJS Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">InvoZone (Pvt) Ltd - FullTime</h4>
              <p>
                I was working with this company as a Software Engineer / Senior ReactJS developer.
                <ul>
                  <li>
                    Meeting with the development team to discuss user interface ideas and
                    applications.
                  </li>
                  <li>Reviewing application requirements and interface designs.</li>
                  <li>Identifying web-based user interactions.</li>
                  <li>
                    Developing and implementing highly responsive user interface components using
                    react concepts.
                  </li>
                  <li>
                    Writing application interface codes using JavaScript following react.js,
                    TypeScript workflows.
                  </li>
                  <li>Troubleshooting interface software and debugging application codes.</li>
                  <li>
                    Developing and implementing front-end architecture to support user interface
                    concepts.
                  </li>
                  <li>Execute full software development life cycle (SDLC)</li>
                  <li>
                    Develop flowcharts, layouts and documentation to identify requirements and
                    solutions Write well-designed, testable code
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="Contract - 2022"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer - Contract Based
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Analog</h4>
              <p>
                I was working with this company as a Software Engineer.
                <ul>
                  <li>
                    Writing application interface codes using JavaScript following react.js,
                    TypeScript workflows.
                  </li>
                  <li>
                    Developing and implementing front-end architecture to support user interface
                    concepts.
                  </li>
                  <li>Working on Multichain concept with Polkadot js & Substrate.</li>
                  <li>
                    Meeting with the development team to discuss user interface ideas and
                    applications.
                  </li>
                  <li>Reviewing application requirements and interface designs.</li>
                  <li>Identifying web-based user interactions.</li>
                  <li>
                    Developing and implementing highly responsive user interface components using
                    react and typescript concepts.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="2021 - 2021"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">ArhamSoft (Pvt) Ltd - FullTime</h4>
              <p>
                I was working with this company as a Software Engineer / ReactJS Front-End
                developer.
                <ul>
                  <li>
                    Meeting with the development team to discuss user interface ideas and
                    applications.
                  </li>
                  <li>Reviewing application requirements and interface designs.</li>
                  <li>Identifying web-based user interactions.</li>
                  <li>
                    Developing and implementing highly responsive user interface components using
                    react concepts.
                  </li>
                  <li>
                    Writing application interface codes using JavaScript following react.js
                    workflows.
                  </li>
                  <li>Troubleshooting interface software and debugging application codes.</li>
                  <li>
                    Developing and implementing front-end architecture to support user interface
                    concepts.
                  </li>
                  <li>Execute full software development life cycle (SDLC)</li>
                  <li>
                    Develop flowcharts, layouts and documentation to identify requirements and
                    solutions Write well-designed, testable codes
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="2020 - 2021"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">ReactJS Front End Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">AlphaSquad - FullTime</h4>
              <p>
                I was working with this company as a ReactJS Front-End developer.
                <ul>
                  <li>
                    Meeting with the development team to discuss user interface ideas and
                    applications.
                  </li>
                  <li>Reviewing application requirements and interface designs.</li>
                  <li>Identifying web-based user interactions.</li>
                  <li>
                    Developing and implementing highly responsive user interface components using
                    react concepts.
                  </li>
                  <li>
                    Writing application interface codes using JavaScript following react.js
                    workflows.
                  </li>
                  <li>Troubleshooting interface software and debugging application codes.</li>
                  <li>
                    Developing and implementing front-end architecture to support user interface
                    concepts.
                  </li>
                  <li>Monitoring and improving front-end performance.</li>
                  <li>Getting response from API's and show the data on front end through MVC.</li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="April 2013"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Front End Developer & UI/UX</h3>
              <h4 className="vertical-timeline-element-subtitle">Consecutive Bytes - Internship</h4>
              <p>
                I was working with this company as a Front-End developer & UI/UX.
                <ul>
                  <li>Use markup languages like HTML to create user-friendly web pages.</li>
                  <li>Maintain and improve website.</li>
                  <li>Optimize applications for maximum speed.</li>
                  <li>Design mobile-based features.</li>
                  <li>Adobe photoshop work making some layers</li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "transparent",
                color: "#cbcbcb",
                boxShadow: "0px 1px 22px #cbcbcb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f1f1f" }}
              date="November 2012"
              iconStyle={{ background: "#cbcbcb" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">Front End Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">HBS Solutions - Full-Time</h4>
              <p>
                I was working with this company remotely as a Front-End developer.
                <ul>
                  <li>Use markup languages like HTML to create user-friendly web pages.</li>
                  <li>Maintain and improve website.</li>
                  <li>Optimize applications for maximum speed.</li>
                  <li>Design mobile-based features.</li>
                </ul>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </Container>
  );
};
export default WorkExperience;
