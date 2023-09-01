import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUs = (props) => {
  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const email = emailRef.current.value;


    const details={
        name:name,
        number:number,
        email:email
    }
    props.onAddDetails(details);
   
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label> Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Number" ref={numberRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  );
};

export default ContactUs;
