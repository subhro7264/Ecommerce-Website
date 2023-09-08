import React, { useContext } from "react";
import { Button, Card, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
    id={item.id}
      key={item.id}
      img={item.img}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={() => cartItemRemoveHandler(item.id)}
      onAdd={() => cartItemAddHandler(item)}
    />
  ));

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    
      alert("Order placed successfully");
    
  };
  // const productsArr=cartCtx.items;
  // let totAmount = 0;
  //   productsArr.forEach((item) => {
  //       console.log(item);
  //       totAmount += item.price;
  //   })




const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  return (
    <Card className="m-5">
      <Card.Body>
        <Card.Header>Cart Items</Card.Header>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </Table>
        <Card.Footer>
          <div className="d-flex justify-content-between">
            <span>Total Amount:</span>
            <span>{totalAmount}</span>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <Button
              variant="danger"
              onClick={props.onHideCart}
              className="me-2"
            >
              Close
            </Button>
            {hasItem && (
              <Button onClick={orderHandler} variant="success">
                Place Order
              </Button>
            )}
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Cart;

// import React, { useContext, useEffect } from "react";
// import { Button, Card } from "react-bootstrap";
// import CartContext from "../store/cart-context";
// import CartItem from "./CartItem";

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);
//   const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
//   const hasItem = cartCtx.items.length > 0;
//   const endPoint = cartCtx.email;
//   const crudCrud = `https://crudcrud.com/api/5618d8acbfd54a9d983d70c8dbc7d0bd/${endPoint}`;

//   const cartItemAddHandler = (item) => {
//     cartCtx.addItem({ ...item, amount: 1 });
//   };

//   const cartItemRemoveHandler = (id) => {
//     cartCtx.removeItem(id);
//   };

//   useEffect(() => {
//     // Fetch and load cart items
//     const loadCartItems = async () => {
//       try {
//         const resp = await fetch(crudCrud, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           if (!resp.ok) {
//           // Handle non-200 HTTP status codes here, e.g., display an error message
//           throw new Error('Failed to fetch cart items');
//         }
//         const data = await resp.json();
//         console.log(data);
//         cartCtx.addItem({
//           id: data.id,
//           img: data.img,
//           name: data.title,
//           amount: data.amount,
//           price: data.price,
//         });
//       } catch (error) {
//         console.error("Error loading cart items:", error);
//         // Handle the error, e.g., display an error message to the user
//       }
//     };

//     loadCartItems();
//   },[cartCtx,crudCrud]);

//   const cartItems = (
//     <ul>
//       {cartCtx.items.map((item) => (
//         <CartItem
//           key={item.id}
//           img={item.img}
//           name={item.name}
//           amount={item.amount}
//           price={item.price}
//           onRemove={cartItemRemoveHandler.bind(null, item.id)}
//           onAdd={() => cartItemAddHandler(item)}
//         />
//       ))}
//     </ul>
//   );

//   const orderHandler = () => {
//     alert("Order Success");
//     // if (cartCtx.items.length === 0) {
//     //   alert("Cart is empty");
//     // } else {
//     //   alert("Order placed successfully");
//     //   cartCtx.empty();
//     // }
//   };

//   return (
//     <Card className="m-5">
//       <Card.Body>
//         <Card.Header>Cart Items</Card.Header>
//         <Card.Text>{cartItems}</Card.Text>
//         <Card.Footer>
//           <div>
//             <span>Total Amount</span>
//             <span>{totalAmount}</span>
//           </div>
//           <div>
//             <Button variant="danger" onClick={props.onHideCart} className="m-3">
//               Close
//             </Button>
//             {hasItem && <Button onClick={orderHandler}>Order</Button>}
//           </div>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Cart;
