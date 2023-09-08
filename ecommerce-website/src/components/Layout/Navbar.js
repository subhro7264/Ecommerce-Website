// import React, { useContext } from "react";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import NavbarButton from "./NavbarButton";
// import CartContext from "../store/cart-context";

// const NavbarComponent = ({ onShowCart }) => {
//   const navigate = useNavigate();
//   const authCtx = useContext(CartContext);
//   const isLoggedIn = authCtx.isLoggedIn;
//   const logoutHandler = () => {
//     authCtx.logout();
//     navigate("/auth", { replace: true });
//   };

//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Nav className="me-auto">
//          { isLoggedIn && <Nav.Link as={NavLink} to="/home">
//             Home
//           </Nav.Link>}
//           {isLoggedIn && (
//             <Nav.Link as={NavLink} to="/">
//               Store
//             </Nav.Link>
//           )}
//          {isLoggedIn&& <Nav.Link as={NavLink} to="/about">
//             About
//           </Nav.Link>}
//          { isLoggedIn&& <Nav.Link as={NavLink} to="/contactUs">
//             ContactUs
//           </Nav.Link>}
//           {!isLoggedIn && (
//             <Nav.Link as={NavLink} to="/auth">
//               LogIn
//             </Nav.Link>
//           )}
//           {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
//         </Nav>
//         <NavbarButton onClick={onShowCart} />
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;
import React, { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import CartContext from "../store/cart-context";

const NavbarComponent = ({ onShowCart }) => {
  const navigate = useNavigate();
  const authCtx = useContext(CartContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth", { replace: true });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/">
                Store
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/contactUs">
                Contact Us
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!isLoggedIn && (
              <Nav.Link as={NavLink} to="/auth">
                Login
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Button variant="outline-danger" onClick={logoutHandler}>
                Logout
              </Button>
            )}
            <  NavbarButton onClick={onShowCart} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
