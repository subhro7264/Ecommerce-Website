import React, { Fragment } from "react";

const ProductsItems = (props) => {
  return (
    <Fragment>
        <li>
      <div>
        <div><h3>{props.title}</h3></div>
        <div><h3>{props.price}</h3></div>
        <div><h3>{props.src}</h3></div>
      </div>
      </li>
    </Fragment>
  );
};
export default ProductsItems;
