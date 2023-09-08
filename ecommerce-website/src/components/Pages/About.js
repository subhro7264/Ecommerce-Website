import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import logo from '../../Asset/tree.jpg'

const About = () => {
  return (
    <Container className="justify-content-center"  >
    <div >
      <h1  className="ml-6">About</h1>
      <Col >
        <Image src={logo} roundedCircle  style={{ width: "10rem"  }} />
      </Col>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        quae, officia soluta eius odio unde nam, est doloribus culpa quaerat
        esse aspernatur, quis impedit rerum excepturi iure! Culpa nesciunt
        nam, illum pariatur libero minus? Odio molestias asperiores adipisci,
        voluptatibus nam dolor impedit numquam pariatur perferendis odit dicta
        voluptatem nobis earum!
      </p>
    </div>
  </Container>
  );
};

export default About;
