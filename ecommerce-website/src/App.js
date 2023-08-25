import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Layout/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);

  const onShowCartHandler = () => {
    setCart(true);
  };
  const onHideCartHandler = () => {
    setCart(false);
  };
  return (
    <CartProvider>
      <Navbar onShowCart={onShowCartHandler} />
      {cart && <Cart onHideCart={onHideCartHandler} />}
      <Products />
    </CartProvider>
  );
}

export default App;
