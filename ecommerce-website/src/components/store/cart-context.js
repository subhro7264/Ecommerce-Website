import React from "react";

const CardContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  empty: () => {},
  clearCart: () => {},
  token: "",
  isLoggedIn: false,
  email:(email)=>{},
  login: (token) => {},
  logout: () => {},
  showItem: () => {},
  initialCart: () => {},
  
});
export default CardContext;

  