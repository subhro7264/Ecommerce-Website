
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const cartElements = [
    {
        title: "Colors",

        price: 100,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

        quantity: 2,
    },

    {
        title: "Black and white Colors",

        price: 50,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity: 3,
    },

    {
        title: "Yellow and Black Colors",

        price: 70,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity: 1,
    },
];


 

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
       Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
        <ul>
            <li>
                <div>
                    <h3>{cartElements[0].title}</h3>
                    <h3>{cartElements[0].price}</h3>
                    <div>{<img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" alt="this a pogo"/>}</div>
                    <h2>{cartElements[0].quantity}</h2>

                </div>
            </li>
     
       
        </ul>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
}

export default Example;