import React from "react";

const CardContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export default CardContext;
