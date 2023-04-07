import React from "react";
import "./ContactStyles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { IconMail } from "@tabler/icons-react";

function Contact() {
   return (
      <>
         <Container fluid id="container-contact" className="m-0 p-0">
            <Row>
               <Col>
                  <h1 id="contact-title" className="m-0 p-0 text-center">
                     Contact me!
                  </h1>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Container id="container-contact-form">
                     <div id="contact-text">
                        <p>
                        I am currently looking for a full-time position as a
                        full stack developer. If you are interested in hiring
                        me.
                        </p>
                        <a href="mailto: csnider91@live.com">
                           <IconMail /> email
                        </a>
                     </div>
                  </Container>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default Contact;
