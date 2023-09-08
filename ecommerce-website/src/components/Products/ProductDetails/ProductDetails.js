// import React, { useContext } from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import CartContext from "../../store/cart-context";
// import { useParams } from "react-router-dom";
// import { productsArr } from "../../Products/Products";

// export default function ProductPage() {
//   const ctx = useContext(CartContext);
//   const params = useParams();
//   console.log(params.productId);

//   const product = productsArr.find(
//     (element) => element.id === params.productId
//   );
//   if (!product) {
//     return <p>Something went Wrong while loading {params.productId}</p>;
//   }

//   console.log(product);

//   const AddItemHandler = (product) => {
//     ctx.addItem({ ...product, amount: 1 });
//   };

//   return (
//     <Container fluid="md" style={{ marginTop: "5rem", width:"35rem" }}>
//       <Row>
//         <Col lg="5" sm="5">
//           <Card className="d-flex p-2">
//             <Card.Img variant="top" src={product.img} alt={product.title} />
//             <Card.Body>
//               <Card.Title>{product.title}</Card.Title>
//               <Card.Subtitle>
//                 <span>${product.price}</span>
//               </Card.Subtitle>
//             </Card.Body>
//             <Button onClick={AddItemHandler.bind(null, product)}>
//               Add to cart
//             </Button>
//           </Card>
//         </Col>
//         <Col xs="7">
//           <Row className="p-1">
//             <Col className="p-1 m-1 ">
//               <h1>Reviews By our customers</h1>
//             </Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Tarak</h4>
//             </Col>
//             <Col className="mb-2">good product must buy</Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Rina</h4>
//             </Col>
//             <Col className="mb-2 ">good product is ok</Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Subhro</h4>
//             </Col>
//             <Col>good quality</Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }




import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useParams } from "react-router-dom";
import { productsArr } from "../../Products/Products";

export default function ProductPage() {
  const ctx = useContext(CartContext);
  const params = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = productsArr.find(
    (element) => element.id === params.productId
  );
  if (!product) {
    return <p>Something went Wrong while loading {params.productId}</p>;
  }

  const AddItemHandler = (product, quantity) => {
    ctx.addItem({ ...product, amount: quantity });
  };

  return (
    <Container fluid="md" style={{ marginTop: "5rem", width:"35rem" }}>
      <Row>
        <Col lg={5} sm={2}>
          <Card className="p-4">
            <Card.Img
              variant="top"
              src={product.img}
              alt={product.title}
              className="product-image"
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ${product.price}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <div className="d-flex align-items-center">
                <span className="mr-2">Quantity:</span>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="success"
                onClick={() => AddItemHandler(product, quantity)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={7} sm={12}>
          <div className="p-4">
            <h2>Customer Reviews</h2>
            <div className="review">
              <h4>Tarak</h4>
              <p className="mb-2">Good product, must buy!</p>
            </div>
            <div className="review">
              <h4>Rina</h4>
              <p className="mb-2">Good product, it's okay.</p>
            </div>
            <div className="review">
              <h4>Subhro</h4>
              <p>Good quality.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}


