
// import React from "react";
// import { Container, Navbar, Card, Button, Row, Col } from "react-bootstrap";

// const Home=()=>{

//     return(
//      <React.Fragment>
      
//       <Navbar bg="secondary" variant="dark" className="mb-3" >
//         <Container style={{height: "15rem"}}>
//           <h2 className="center-navbar">The Generics</h2>
//           <Button variant="dark">Go to Albums</Button>
//         </Container>
//       </Navbar>
//       <Card style={{width: "100%"}}>
//         <Card.Title style={{alignSelf: "center", fontFamily: "cursive"}}>Tours</Card.Title>
//         <Card.Body>
//             <Row>
//                 <Col>
//                     <p>July 16</p>
//                 </Col>
//                 <Col>
//                     <p>DETROIT, MI</p>
//                 </Col>
//                 <Col> 
//                     <p>DTE ENERGY MUSIC THEATRE</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p>July 19</p>
//                 </Col>
//                 <Col>
//                     <p>TORONTO,ON</p>
//                 </Col>
//                 <Col> 
//                     <p>BUDWEISER STAGE</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p>July 22</p>
//                 </Col>
//                 <Col>
//                     <p>BRISTOW, VA</p>
//                 </Col>
//                 <Col> 
//                     <p>JIGGY LUBE LIVE</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p>July 29</p>
//                 </Col>
//                 <Col>
//                     <p>PHOENIX, AZ</p>
//                 </Col>
//                 <Col> 
//                     <p>AK-CHIN PAVILION</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p>Aug 2</p>
//                 </Col>
//                 <Col>
//                     <p>LAS VEGAS, NV</p>
//                 </Col>
//                 <Col> 
//                     <p>T-MOBILE ARENA</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <p>Aug 7</p>
//                 </Col>
//                 <Col>
//                     <p>CONCORD, CA</p>
//                 </Col>
//                 <Col> 
//                     <p>CONCORD PAVILION</p>
//                 </Col>
//                 <Col>
//                     <Button>Buy Tickets</Button>
//                 </Col>
//             </Row>
//         </Card.Body>
//       </Card>
//     </React.Fragment>
//     )
// }

// export default Home
import React from "react";
import { Container, Navbar, Card, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar bg="primary" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand className="text-center">The Generics</Navbar.Brand>
          <div className="text-center mt-3">
            <Button variant="light">Go to Albums</Button>
          </div>
        </Container>
      </Navbar>
      <Container>
        <Card className="shadow">
          <Card.Title className="text-center mt-4 mb-0">Upcoming Tours</Card.Title>
          <Card.Body>
            <Row className="mb-4">
              <Col sm={12} md={6} lg={3}>
                <div className="tour-card">
                  <h4 className="text-primary">July 16</h4>
                  <p>DETROIT, MI</p>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                  <Button variant="primary">Buy Tickets</Button>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="tour-card">
                  <h4 className="text-primary">July 16</h4>
                  <p>DETROIT, MI</p>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                  <Button variant="primary">Buy Tickets</Button>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="tour-card">
                  <h4 className="text-primary">July 16</h4>
                  <p>DETROIT, MI</p>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                  <Button variant="primary">Buy Tickets</Button>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div className="tour-card">
                  <h4 className="text-primary">July 16</h4>
                  <p>DETROIT, MI</p>
                  <p>DTE ENERGY MUSIC THEATRE</p>
                  <Button variant="primary">Buy Tickets</Button>
                </div>
              </Col>
              
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Home;
