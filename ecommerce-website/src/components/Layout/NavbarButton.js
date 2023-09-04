import { Fragment, useContext} from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

function NavbarButton(props) {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
   },0);
  return (
    <Fragment>
      <Button onClick={props.onClick}>
        <span>Your Cart</span>
        <span style={{backgroundColor:"red"}}>{numberOfCartItems}</span>
      </Button>
      
    </Fragment>
  );
}

export default NavbarButton;