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
import { Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(false);

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
        <Generics />
        <Routes>
      
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Products />} />
          <Route path="/home" element={<Home />} />

        </Routes>
        <Footer/>
      </CartProvider>
    </Fragment>
  );
}

export default App;
