import React, { Fragment } from "react";
// import ProductItem from './ProductsItem/ProductsItems'


import ProductsItems from "./ProductsItem/ProductsItems";

export const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const products = productsArr.map((product) => (
  <ProductsItems
     key={product.id}
    id={Math.random()}
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
