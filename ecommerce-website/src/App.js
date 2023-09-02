


import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Layout/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import About from "./components/Pages/About";
import Generics from "./components/TheGenerics/Generics";
import Home from "./components/Pages/Home";
import Footer from "./components/Layout/Footer";
import ContactUs from "./components/Pages/ContactUs";
import { Route, Routes} from "react-router-dom"; 
import ProductPage from "./components/Products/ProductDetails/ProductDetails";

function App() {
  const [cart, setCart] = useState(false);

  async function addDetailsHandler(detail) {
    const response = await fetch(
      "https://react-1ee49-default-rtdb.firebaseio.com/details.json",
      {
        method: "POST",
        body: JSON.stringify(detail),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const onShowCartHandler = () => {
    setCart(true);
  };
  const onHideCartHandler = () => {
    setCart(false);
  };

  return (
    <Fragment>
      <CartProvider>
        <Navbar onShowCart={onShowCartHandler} />
        {cart && <Cart onHideCart={onHideCartHandler} />}
        {!cart && <Generics />}
        <Routes>
          {!cart && <Route path="/about" element={<About />} />}
          {!cart && <Route exact path="/" element={<Products />} />}
          {!cart && <Route path="/home" element={<Home />} />}
          {!cart && (
            <Route
              path="/contactUs"
              element={<ContactUs onAddDetails={addDetailsHandler} />}
            />
          )}
          <Route path="Products/:productId" element={<ProductPage />} />

         
        </Routes>
        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;

