import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarButton from "./NavbarButton";


const NavbarComponent=(props)=> {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="space-between">
          <Nav className="me-auto pl-9  ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <NavbarButton onClick={props.onShowCart}/>
        </Container>
     
      </Navbar>
      

  
    </>
  );
}

export default NavbarComponent;
