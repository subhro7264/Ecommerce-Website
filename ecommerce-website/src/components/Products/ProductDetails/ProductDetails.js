import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useParams } from "react-router-dom";
import { productsArr } from "../../Products/Products";

export default function ProductPage() {
  // const params = useParams();
  // const product = productsArr.find(
  //   (element) => element.id === params.productId
  // );

  // const ctx = useContext(CartContext);

  // const AddItemHandler = () => {
  //   ctx.addItem({ ...product, quantity: 1 });
  // };

  // return (
  //   <Container fluid="md" style={{ marginTop: "5rem" }}>
  //     <Row>
  //       <Col lg="5" sm="5">
  //         <Card className="d-flex p-2">
  //           <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
  //           <Card.Body>
  //             <Card.Title>{product.title}</Card.Title>
  //             <Card.Subtitle>
  //               <span>${product.price}</span>
  //             </Card.Subtitle>
  //           </Card.Body>
  //           <Button onClick={AddItemHandler}>Add to cart</Button>
  //         </Card>
  //       </Col>
  //       <Col xs="7">
  //         <Row className="p-1">
  //           <Col className="p-1 m-1 ">
  //             <h1>Reviews By our customers</h1>
  //           </Col>
  //           <Col xs="12">
  //             <h4 style={{ color: "green" }}>Nil</h4>
  //           </Col>
  //           <Col className="mb-2">good product must buy</Col>
  //           <Col xs="12">
  //             <h4 style={{ color: "green" }}>Smit</h4>
  //           </Col>
  //           <Col className="mb-2 ">good product is ok</Col>
  //           <Col xs="12">
  //             <h4 style={{ color: "green" }}>RAj KING</h4>
  //           </Col>
  //           <Col>good quality</Col>
  //         </Row>
  //       </Col>
  //     </Row>
  //   </Container>

  const params = useParams();
  console.log(params.productId);
 
  const product = productsArr.find((element) => element.id === params.productId
  );
  console.log(product);
  const ctx = useContext(CartContext);
  const AddItemHandler = (e) => {
    ctx.addItem({ ...product, quantity: 1 });
  };


  return (
    <Container fluid="md" style={{ marginTop: "5rem" }}>
      <Row>
        <Col lg="5" sm="5">
          <Card className="d-flex p-2">
            {/* <Card.Img
              variant="top"
              src={product.imageUrl}
              alt={product.title}
            /> */}
            <Card.Body>
              {/* <Card.Title>{product.title}</Card.Title> */}
              <Card.Subtitle>
                {/* <span>${product.price}</span> */}
              </Card.Subtitle>
            </Card.Body>
            <Button  onClick={AddItemHandler}>
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
              <h4 style={{ color: "green" }}>Aakash</h4>
            </Col>
            <Col className="mb-2">good product must buy</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Raghav</h4>
            </Col>
            <Col className="mb-2 ">good product is ok</Col>
            <Col xs="12">
              <h4 style={{ color: "green" }}>Neel</h4>
            </Col>
            <Col>good quality</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// import React, { useContext } from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import CartContext from "../../store/cart-context";
// // import { productsArr } from "../../Products/Products";

// export default function ProductPage() {
//   const { productId } = useParams();
//   const ctx = useContext(CartContext);

//   // const productsArr = [
//   //   {
//   //     id: 1,
//   //     title: "Colors",
//   //     price: 100,
//   //     imageUrl:
//   //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   //   },

//   //   {
//   //     id: 2,
//   //     title: "Black and white Colors",
//   //     price: 50,
//   //     imageUrl:
//   //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   //   },

//   //   {
//   //     id: 3,
//   //     title: "Yellow and Black Colors",
//   //     price: 70,
//   //     imageUrl:
//   //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   //   },

//   //   {
//   //     id: 4,
//   //     title: "Blue Color",
//   //     price: 100,
//   //     imageUrl:
//   //       "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   //   },
//   // ];

//   // Find the product by id
//   const product = ctx.items.find((element) => element.id === productId);

//   // If the product is not found, you can handle it as per your requirement
//   console.log(product);
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const AddItemHandler = () => {
//     ctx.addItem({ ...product, quantity: 1 });
//   };

//   return (
//     <Container fluid="md" style={{ marginTop: "5rem" }}>
//       <Row>
//         <Col lg="5" sm="5">
//           <Card className="d-flex p-2">
//             <Card.Img
//               variant="top"
//               src={ctx.img} // Assuming imageUrl is the correct property
//               alt={ctx.title}
//             />
//             <Card.Body>
//               <Card.Title>{ctx.title}</Card.Title>
//               <Card.Subtitle>
//                 <span>${ctx.price}</span>
//               </Card.Subtitle>
//             </Card.Body>
//             <Button onClick={AddItemHandler}>Add to cart</Button>
//           </Card>
//         </Col>
//         <Col xs="7">
//           <Row className="p-1">
//             <Col className="p-1 m-1 ">
//               <h1>Reviews By our customers</h1>
//             </Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Aakash</h4>
//             </Col>
//             <Col className="mb-2">good product must buy</Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Raghav</h4>
//             </Col>
//             <Col className="mb-2 ">good product is ok</Col>
//             <Col xs="12">
//               <h4 style={{ color: "green" }}>Neel</h4>
//             </Col>
//             <Col>good quality</Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
