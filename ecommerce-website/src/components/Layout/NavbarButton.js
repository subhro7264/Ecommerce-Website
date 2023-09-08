// import { Fragment, useContext } from "react";
// import { Button } from "react-bootstrap";
// import CartContext from "../store/cart-context";

// function NavbarButton(props) {
//   const cartCtx = useContext(CartContext);
//   const isLoggedIn = cartCtx.isLoggedIn;
//   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);
//   return (
//     <Fragment>
//       {isLoggedIn && (
//         <Button onClick={props.onClick}>
//           <span>Your Cart</span>
//           <span style={{ backgroundColor: "red" }}>{numberOfCartItems}</span>
//         </Button>
//       )}
//     </Fragment>
//   );
// }

// export default NavbarButton;




import { Fragment, useContext } from "react";
import { Button, Badge } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { FaShoppingCart } from "react-icons/fa"; 

function NavbarButton(props) {
  const cartCtx = useContext(CartContext);
  const isLoggedIn = cartCtx.isLoggedIn;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      {isLoggedIn && (
        <Button variant="outline-info" onClick={props.onClick}>
          <FaShoppingCart />  Cart
          {numberOfCartItems > 0 && (
            <Badge bg="danger" className="ms-2">{numberOfCartItems}</Badge>
          )}
        </Button>
      )}
    </Fragment>
  );
}

export default NavbarButton;
