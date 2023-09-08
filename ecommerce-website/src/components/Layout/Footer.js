

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/">LinkedIn</Nav.Link>
          <Nav.Link href="https://student.sharpener.tech/dashboard">
            Sharpener
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;

