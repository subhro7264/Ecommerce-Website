import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="align-item-end">
      <Container  className="ms-auto">
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Nav >
          <Nav.Link
            href="https://Youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >Youtube</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/">LinkDin</Nav.Link>
          <Nav.Link href="https://sharpener.tech.com">Sharpener</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
