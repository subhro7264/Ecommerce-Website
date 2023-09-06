import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useParams } from "react-router-dom";
import { productsArr } from "../../Products/Products";

export default function ProductPage() {
  const ctx = useContext(CartContext);
  const params = useParams();
  console.log(params.productId);

  const product = productsArr.find(
    (element) => element.id === params.productId
  );
  if (!product) {
    return <p>Something went Wrong while loading {params.productId}</p>;
  }

  console.log(product);

  const AddItemHandler = (product) => {
    ctx.addItem({ ...product, amount: 1 });
  };

  return (
    <Container fluid="md" style={{ marginTop: "5rem", width:"35rem" }}>
      <Row>
        <Col lg="5" sm="5">
          <Card className="d-flex p-2">
            <Card.Img variant="top" src={product.img} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>
                <span>${product.price}</span>
              </Card.Subtitle>
            </Card.Body>
            <Button onClick={AddItemHandler.bind(null, product)}>
              Add to cart
            </Button>
          </Card>
        </Col>
        <Col xs="7">
          <Row className="p-1">
            <Col className="p-1 m-1 ">
              <h1>Reviews By our customers</h1>
            </Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Tarak</h4>
            </Col>
            <Col className="mb-2">good product must buy</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Rina</h4>
            </Col>
            <Col className="mb-2 ">good product is ok</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Subhro</h4>
            </Col>
            <Col>good quality</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
