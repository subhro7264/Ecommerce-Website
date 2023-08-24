import React, { Fragment } from "react";
// import ProductItem from './ProductsItem/ProductsItems'

const productsArr = [
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

const Products = () => {
  return (
    <Fragment>
        <div >
      <ul>
        <li>
          <div>
            {productsArr[0].title}

            <div>
              {
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                  alt="this a "
                />
              }
            </div>
            <div>Price={productsArr[0].price}</div>
          </div>
        </li>

        <li>
          <div>
            {productsArr[1].title}

            <div>
              {
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                  alt="this a "
                />
              }
            </div>
            <div>Price={productsArr[1].price}</div>
          </div>
        </li>

        <li>
          <div>
            {productsArr[2].title}

            <div>
              {
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                  alt="this a "
                />
              }
            </div>
            <div>Price={productsArr[2].price}</div>
          </div>
        </li>

        <li>
          <div>
            {productsArr[3].title}

            <div>
              {
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                  alt="this a "
                />
              }
            </div>
            <div>Price={productsArr[3].price}</div>
          </div>
        </li>
      </ul>
      </div>

    </Fragment>
  );
};
export default Products;
