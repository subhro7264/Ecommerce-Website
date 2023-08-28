import React from "react";
import { Button, Card } from "react-bootstrap";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Card>
      <Card.Body>
      <Card.Img  style={{width:"5rem"}}   src={props.img}/>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>x {props.amount}</Card.Title>
        <Button  variant="danger" onClick={props.onRemove}>−</Button>
        <Button onClick={props.onAdd}>+</Button>
      </Card.Body>
    </Card>
  );
};
export default CartItem;
