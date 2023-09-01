import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>
        <h1 >Tours</h1>
        <div>
          <span>JUL16</span>
          <span>DETROIT, MI</span>
          <span>DTE ENERGY MUSIC THEATRE</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>

        <hr />
        <div>
          <span>JUL19</span>
          <span>TORONTO,ON</span>
          <span>BUDWEISER STAGE</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>
        <hr />
        <div>
          <span>JUL22</span>
          <span>BRISTOW, VA</span>
          <span>JIGGY LUBE LIVE</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>
        <hr />
        <div>
          <span>JUL29</span>
          <span>PHOENIX, AZ</span>
          <span>AK-CHIN PAVILION</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>
        <hr />
        <div>
          <span>AUG 2</span>
          <span>LAS VEGAS, NV</span>
          <span>T-MOBILE ARENA</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>
        <hr />
        <div>
          <span>AUG 7</span>
          <span>CONCORD, CA</span>
          <span>CONCORD PAVILION</span>
          <span>
            {" "}
            <Button>Buy Tickets</Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
