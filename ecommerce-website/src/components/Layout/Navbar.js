import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarButton from "./NavbarButton";

const NavbarComponent = ({ onShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home" >
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/" exact>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contactUs">
          ContactUs
          </Nav.Link>

        </Nav>
        <NavbarButton onClick={onShowCart} />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
