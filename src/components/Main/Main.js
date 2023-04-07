import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./MainStyles.css";
import selfportrait from "../../media/selfportrait.jpg";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


function Main() {
   return (
      <>
         <Container
            fluid
            className="container-main d-flex flex-column m-0 p-0 "
         >
            <Container fluid className="container-hero m-0 p-0">
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
               <Row className="m-0 p-0 g-0">
                  <Col md="4" className="text-md-left mt-5" id="intro">
                     <Container className="container-introduction d-flex">
                        <div className="container-portrait">
                           <img
                              src={selfportrait}
                              alt="self portrait"
                              id="self-portrait"
                           />
                        </div>
                        <div id="intro-text">
                           <h1 id="my-name">chelsea snider</h1>
                           <p id="my-description">full stack developer</p>
                        </div>
                     </Container>
                  </Col>
               </Row>
            </Container>
         </Container>
         <Container fluid className="container-skills m-0 p-0" id="#skills">
            <Row className="m-0 p-0">
               <Col>
                  <Skills />
               </Col>
            </Row>
         </Container>
         <Container fluid className="container-projects m-0 p-0">
            <Row className="m-0 p-0">
               <Col className="m-0 p-0">
                  <Projects />
               </Col>
            </Row>
         </Container>
         <Container fluid className="container-contact m-0 p-0">
            <Row className="m-0 p-0">
               <Col className="m-0 p-0">
                 <Contact />
               </Col>
            </Row>
         </Container>
      </>
   );
}
export default Main;
