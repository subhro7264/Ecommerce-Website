import React, { Fragment, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Layout/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContext from "./components/store/cart-context";
import About from "./components/Pages/About";
import Generics from "./components/TheGenerics/Generics";
import Home from "./components/Pages/Home";
import Footer from "./components/Layout/Footer";
import ContactUs from "./components/Pages/ContactUs";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "./components/Products/ProductDetails/ProductDetails";
import AuthPage from "./components/Pages/AuthPage";

function App() {
  const authCtx = useContext(CartContext);
  const isLoggedIn = authCtx.isLoggedIn;
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
      <Navbar onShowCart={onShowCartHandler} />
      {cart && <Cart onHideCart={onHideCartHandler} />}
      {!cart && <Generics />}
      <Routes>
        {!cart && (
          <Route
            exact
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/auth" replace />}
          />
        )}
        {!cart && (
          <Route
            exact
            path="/"
            element={
              isLoggedIn ? <Products /> : <Navigate to="/auth" replace />
            }
          />
        )}
         {!cart && (
          <Route
            exact
            path="/home"
            element={
              isLoggedIn ? <Home /> : <Navigate to="/auth" replace />
            }
          />
        )}
        {/* {!cart && (
          <Route
            path="/contactUs"
            element={<ContactUs onAddDetails={addDetailsHandler} />}
          />
        )} */}
        

        {!cart && (
          <Route
            exact
            path="/contactUs"
            element={
              isLoggedIn ? <ContactUs onAddDetails={addDetailsHandler} /> : <Navigate to="/auth" replace />
            }
          />
        )}

{!cart && (
          <Route
            exact
            path="/Products/:productId"
            element={
              isLoggedIn ? <ProductPage /> : <Navigate to="/auth" replace />
            }
          />
        )}


        {/* <Route path="Products/:productId" element={<ProductPage />} /> */}

        {!cart && <Route path="/auth" element={<AuthPage />} />}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
