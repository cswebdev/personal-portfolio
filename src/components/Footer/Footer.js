import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./FooterStyles.css";
function Footer() {
   return (
      <footer className="bg-dark">
         <Container fluid id="footer">
            <Row>
               <Col md="4" className="text-center text-md-left">
                  <h5>Company Name</h5>
                  <p>123 Main Street</p>
                  <p>City, State 12345</p>
               </Col>
               <Col md="4" className="text-center">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                     <li>
                        <a href="#">Home</a>
                     </li>
                     <li>
                        <a href="#">About</a>
                     </li>
                     <li>
                        <a href="#">Contact</a>
                     </li>
                  </ul>
               </Col>
               <Col md="4" className="text-center text-md-right">
                  <h5>Follow Us</h5>
                  <ul className="list-unstyled">
                     <li>
                        <a href="#">
                           <i className="fab fa-facebook-f"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i className="fab fa-twitter"></i>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i className="fab fa-instagram"></i>
                        </a>
                     </li>
                  </ul>
               </Col>
            </Row>
         </Container>
      </footer>
   );
}

export default Footer;
