import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./HeaderStyles.css";

function Header() {
   return (
      <>
         <Navbar collapseOnSelect expand="lg" id="header">
            <Container id="container-header">
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#skills">Skills</Nav.Link>
                     <Nav.Link href="#pricing">Projects</Nav.Link>
                     <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
}

export default Header;
