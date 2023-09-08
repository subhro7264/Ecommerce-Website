// import React, { useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const ContactUs = (props) => {
//   const nameRef = useRef();
//   const numberRef = useRef();
//   const emailRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const name = nameRef.current.value;
//     const number = numberRef.current.value;
//     const email = emailRef.current.value;

//     const details = {
//       name: name,
//       number: number,
//       email: email,
//     };
//     props.onAddDetails(details);
//     nameRef.current.value = "";
//     numberRef.current.value = "";
//     emailRef.current.value = "";
//   };

//   return (
//     <>
//       <Form onSubmit={submitHandler}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label> Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Your Name"
//             ref={nameRef}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter Your email" ref={emailRef}  required/>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicNumber">
//           <Form.Label>Number</Form.Label>
//           <Form.Control type="number" placeholder=" Enter Your Number" ref={numberRef} />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       <br />
//     </>
//   );
// };

// export default ContactUs;





import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactUs = (props) => {
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const email = emailRef.current.value;

    const details = {
      name: name,
      number: number,
      email: email,
    };
    props.onAddDetails(details);
    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <h2>Contact Us</h2>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                ref={nameRef}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                ref={emailRef}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Your Phone Number"
                ref={numberRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;

