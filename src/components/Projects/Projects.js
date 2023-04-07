import React from "react";
import "./ProjectStyles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClosetSwap from "../../media/closet-swap.png";
import Chatty from "../../media/Chatty.png";
import PixelPerfect from "../../media/pixelperfect.png";

function Projects() {
   return (
      <>
         <Container fluid id="projects-container">
            <Container fluid id="projects-content">
               <Row>
                  <Col>
                     <h1 id="projects-title"></h1>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Card style={{ width: "50rem" }}>
                        <div className="card-img-container">
                           <Card.Img variant="top" src={ClosetSwap} />
                        </div>
                        <Card.Body>
                           <Card.Title>Closet Swap</Card.Title>
                           <Card.Text>
                              A full CRUD, full stack, web application that
                              allows users to swap clothes with other users
                              intended for the LGBTQ community and allies.
                           </Card.Text>
                           <Card.Text>
                              Frontend: HTML, CSS, React-Bootstrap, ReactJS
                           </Card.Text>
                           Backend: Python, Django, Django Rest Framework,
                           Django allauth, Amazon S3 Bucket, PostgreSQL, Heroku
                           <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </Col>

                  <Col>
                     <Card style={{ width: "50rem" }}>
                        <div className="card-img-container">
                           <Card.Img
                              variant="top"
                              src={Chatty}
                              id="chatty-img"
                           />
                        </div>
                        <Card.Body>
                           <Card.Title>Chatty</Card.Title>
                           <Card.Text>
                              A full CRUD, full stack, web application that
                              allows users to chat with other users. Modern and
                              minimal design with a focus on user experience.
                           </Card.Text>
                           <Card.Text>
                              Frontend: HTML, CSS, React-Bootstrap, ReactJS
                           </Card.Text>
                           <Card.Text>
                              Backend: Python, Django, Django Rest Framework,
                              Django allauth
                           </Card.Text>

                           <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <Card style={{ width: "50rem" }}>
                        <div className="card-img-container">
                           <Card.Img
                              variant="top"
                              src={PixelPerfect}
                              id="pixelperfect"
                           />
                        </div>
                        <Card.Body>
                           <Card.Title>Pixel Perfect</Card.Title>
                           <Card.Text>
                              Pixel perfect is a pure HTML and CSS project that
                              was a challenge to create a pixel perfect clone of
                              a website. Two column layout website with multiple
                              article sections.
                           </Card.Text>
                           <Card.Text>Frontend: HTML, CSS</Card.Text>
                           <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </Col>

                  <Col>
                     <Card style={{ width: "50rem" }}>
                        <div className="card-img-container">
                           <Card.Img
                              variant="top"
                              src={PixelPerfect}
                              id="sylviriviera"
                           />
                        </div>
                        <Card.Body>
                           <Card.Title>Sylvia Rivera Tribute Page</Card.Title>
                           <Card.Text>
                              Pixel perfect is a pure HTML and CSS project that
                              was a challenge to create a pixel perfect clone of
                           </Card.Text>
                           <Card.Text>Frontend: HTML, CSS</Card.Text>
                           <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </Container>
      </>
   );
}

export default Projects;
