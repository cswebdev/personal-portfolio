import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./SkillsStyles.css";

function Skills() {
   return (
      <Container fluid className="m-0 p-0" id="#skills">
         <Row>
            <Col id="container-skills" className="m-0 p-0">
               <Container className="skills-section">
                  <h3>Front End</h3>
                  <ul>
                     <li>Python</li>
                     <li>JavaScript</li>
                     <li>ReactJS</li>
                     <li>Bootstrap</li>
                  </ul>
               </Container>
               <Container className="skills-section">
                  <h3>Back End</h3>
                  <ul>
                     <li>Django</li>
                     <li>Django-rest-framework</li>
                     <li>Django-allauth</li>
                  </ul>
               </Container>
               <Container className="skills-section">
                  <h3>Other</h3>
                  <ul>
                     <li>Git</li>
                     <li>Heroku</li>
                     <li>Mac Terminal</li>
                     <li>Windows Terminal</li>
                     <li>Linux Debian</li>
                  </ul>
               </Container>
            </Col>
         </Row>
      </Container>
   );
}

export default Skills;
