import React, {useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";




  const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`;
    // const hasItem = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item,amount:1})
    };
  
    const cartItems = (
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            img={item.img}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

  return (
    <Card className="m-5">
      <Card.Body>
        <Card.Header> Cart Items</Card.Header>
          <Card.Text> {cartItems}</Card.Text>
         <Card.Footer> <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
       </div>
       <div>
        <Button variant="danger" onClick={props.onHideCart}  className="m-3">Close</Button>
        <Button>Order</Button>
      </div></Card.Footer>
          
     
      </Card.Body>
    

      
    </Card>
  );
};
export default Cart;


// import  React, { useContext } from "react";
// import { Button, Card } from "react-bootstrap";
// import CartContext from "../store/cart-context";
// import CartItem from "./CartItem";

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);
//   const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`;
//   const hasItem = cartCtx.items.length > 0;

//   const cartItemRemoveHandler = (id) => {
//     cartCtx.removeItem(id);
//   };
//   const cartItemAddHandler = (item) => {
//     cartCtx.addItem({...item,amount:1})
//   };

//   const cartItems = (
//     <ul>
//       {cartCtx.items.map((item) => (
//         <CartItem
//           key={item.id}
//           name={item.name}
//           amount={item.amount}
//           price={item.price}
//           onRemove={cartItemRemoveHandler.bind(null, item.id)}
//           onAdd={cartItemAddHandler.bind(null, item)}
//         />
//       ))}
//     </ul>
//   );

//   return (
//     <Card onClose={props.onClose}>
//       {cartItems}
//       <div >
//         <span>Total Amount</span>
//         <span>{totalAmount}</span>
//       </div>
//       <div >
//         <Button className="danger" onClick={props.onClose}>
//           Close
//         </Button>
//         {hasItem && <Button>Order</Button>}
//       </div>
//     </Card>
//   );
// };

// export default Cart;
