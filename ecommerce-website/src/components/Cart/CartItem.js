import React from "react";
import { Button } from "react-bootstrap";
// import { Link ,Route} from "react-router-dom";
const CartItem = (props) => {
  const { img, name, amount, price, onRemove, onAdd } = props;

 
  return (
    <tr>
      <td>
        {/* <Link onClick={detailsHandler} to={`/Products/${id}`}>
          
        </Link> */}
        <img src={img} alt={name} style={{ width: "50px", height: "50px" }} />
      </td>
      <td>{name}</td>
      <td>x{amount}</td>
      <td>${price.toFixed(2)}</td>
      {/* <td>{price}</td> */}
      <td>
        <Button variant="danger" onClick={onRemove}>
          Remove
        </Button>
        <Button variant="success" onClick={onAdd}>
          Add
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;

// import React from "react";
// import { Button, Card } from "react-bootstrap";

// const CartItem = (props) => {
//   const price = `$${props.price.toFixed(2)}`;

//   return (
//     <Card>
//       <Card.Body>
//       <Card.Img  style={{width:"5rem"}}   src={props.img}/>
//         <Card.Title>{props.name}</Card.Title>
//         <Card.Title>{price}</Card.Title>
//         <Card.Title>x {props.amount}</Card.Title>
//         <Button  variant="danger" onClick={props.onRemove}>−</Button>
//         <Button onClick={props.onAdd}>+</Button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default CartItem;
