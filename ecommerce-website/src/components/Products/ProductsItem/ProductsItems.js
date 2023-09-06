// import React, {useContext } from "react";
// import { Col, Container, Row, Card} from "react-bootstrap";
// import CardContext from "../../store/cart-context";
// import ProductForm from '../ProductForm';
// import { Link } from "react-router-dom";
// const ProductsItems = (props) => {
//   const cartCtx=useContext(CardContext)

//   const addToCartHandler=(amount)=>{
//     cartCtx.addItem({
//       id:props.id,
//       img:props.img,
//       name:props.title,
//       amount:amount,
//       price:props.price
//     })
//   }
//   return (

//       <Container className="mt-5  text-center " variant="flush">
//           <Col  className="d-flex justify-content-center" >
//             <Row >
//           <Card style={{ width: "18rem" }} className="m-4" > <Link style={{color:'black'}} to={`/Products/${props.id}`}>{props.title}</Link>
//                 <Card.Img src={props.img} />
//                 <Card.Body>
//                   <Card.Title>{props.title}</Card.Title>
//                   <Card.Title>${props.price}</Card.Title>
//                 </Card.Body>
//               <ProductForm onAddToCart={addToCartHandler}/>
//               </Card>
//             </Row>
//           </Col>
//         </Container>

//   );
// };
// export default ProductsItems;

import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardContext from "../../store/cart-context";
import ProductForm from "../ProductForm";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const cartCtx = useContext(CardContext);
  //  const userEmailId=cartCtx.email;
 
   const addToCartHandler = async (amount) => {
    

      cartCtx.addItem({
        id: props.id,
        img: props.img,
        name: props.title,
        amount: amount,
        price: props.price,
      });
    
  };

  return (
    <Container className="mt-5 text-center" variant="flush">
      <Col className="d-flex justify-content-center">
        <Row>
          <Card style={{ width: "18rem" }} className="m-4">
            <Link style={{ color: "black" }} to={`/Products/${props.id}`}>
              {props.title}
            </Link>
            <Card.Img src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Title>${props.price}</Card.Title>
            </Card.Body>
            <ProductForm onAddToCart={addToCartHandler} />
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default ProductItem;
