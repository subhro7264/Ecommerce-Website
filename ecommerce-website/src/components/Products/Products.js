import React, { Fragment } from "react";
import ProductsItems from "./ProductsItem/ProductsItems";

 export const productsArr = [
  {
    id:1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const products = productsArr.map((product) => (
  <ProductsItems
     key={product.id}
    id={product.id}
    price={product.price}
    title={product.title}
    img={product.imageUrl}
  />
));

const Products = () => {
  return (
    <Fragment>
      <div>{products}</div>
    </Fragment>
  );
};
export default Products;
