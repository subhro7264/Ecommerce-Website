import { useReducer ,useState, } from "react";
import CartContext from "./cart-context";



const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      let updatedItems;
      if (existingCartItemIndex >= 0) {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      const item = state.items[itemIndex];
      const updatedTotal = state.totalAmount - item.price;
      let newItems;
      if (item.amount === 1) {
        newItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const newItem = { ...item, amount: item.amount - 1 };
        newItems = [...state.items];
        newItems[itemIndex] = newItem;
      }
      return {
        items: newItems,
        totalAmount: updatedTotal,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });

  }



const initialToken = localStorage.getItem("token");
const [token, setToken] = useState(initialToken);
const userIsLoggedIn = !!token; //its convert to true or false value;
// const initialEmail = localStorage.getItem("email");
// const [email, setEmail]=useState(initialEmail)
const initialEndPoint = localStorage.getItem("endpoint");
const [endPoint, setEndpoint] = useState(initialEndPoint);

const loginHandler = (token, end) => {
  setToken(token);
  localStorage.setItem("token", token);
  setEndpoint(end);
  localStorage.setItem("endpoint", end);
};
const logoutHandler = () => {
  setToken(null);
  localStorage.removeItem("token");
};


const crudCrud = `https://crudcrud.com/api/5618d8acbfd54a9d983d70c8dbc7d0bd${endPoint}`;
  const addItemToCartHandler = async(item) => {
    try {
      const response = await fetch(
        crudCrud ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items:item,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await response.json();
      // Handle success, you can do something with the response data here
      console.log("Added to cart:", data);
      dispatchCartAction({ type: "ADD", item });
  } catch (error) {
    //   // Handle errors
      console.error("Error adding to cart:", error);
  }
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: token, //token state manage
    isLoggedIn: userIsLoggedIn,
    email:endPoint,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// import React, { useReducer, useState } from "react";
// import CartContext from "./cart-context";
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };
// //  cartReducer
// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     //for adding items
//     console.log("addAction", action.item.price);
//     const exisitingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[exisitingCartItemIndex];
//     let updatedItems;
//     if (existingCartItem) {
//       const updateItem = {
//         ...existingCartItem,
//         quantity: action.item.quantity,
//       };
//       updatedItems = [...state.items];
//       updatedItems[exisitingCartItemIndex] = updateItem;
//     } else {
//       //adding new item for the first time
//       updatedItems = { ...state.items };
//       updatedItems = state.items.concat(action.item);
//     }
//     const updatedAmount = action.item.price * action.item.quantity;
//     return {
//       items: updatedItems,
//       totalAmount: updatedAmount,
//     };
//   }

//   if (action.type === "REM") {
//     let updatedItems;
//     let updatedTotalAmount;
//     let amount;
//     //for checking existing item
//     const exisitingCartItemIndex = state.items.findIndex(
//       (item) => item._id === action.id
//     );
//     console.log(exisitingCartItemIndex);
//     const exisistingItem = state.items[exisitingCartItemIndex];
//     amount = exisistingItem.price * exisistingItem.quantity; //it will grape total amount of particular item
//     updatedTotalAmount = state.totalAmount - amount;
//     updatedItems = state.items.filter((item) => item._id !== action.id);
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === "EMPTY") {
//     return { items: [], totalAmount: 0 };
//   }
//   if (action.type === "CART") {
//     //for adding items
//     const exisitingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[exisitingCartItemIndex];
//     let updatedItems;
//     if (existingCartItem) {
//       const updateItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity + action.item.quantity,
//       };
//       updatedItems = [...state.items];
//       updatedItems[exisitingCartItemIndex] = updateItem;
//     } else {
  
//       updatedItems = state.items.concat(action.item);
//     }
//     const updatedAmount =
//       state.totalAmount + action.item.price * action.item.quantity;
//     return {
//       items: updatedItems,
//       totalAmount: updatedAmount,
//     };
//   }
//   return defaultCartState;
// };

// ///cartProvider
// const CartProvider = (props) => {
//   const initialToken = localStorage.getItem("token");
//   const initialEndPoint = localStorage.getItem("endpoint");
//   const [token, setToken] = useState(initialToken);
//   const [endPoint, setEndpoint] = useState(initialEndPoint);
//   const [cartState, dispachCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );
//   const userIsIsLoggedIn = !!token;
//   const crudcrud = `https://crudcrud.com/api/666d6740b48a446ba7502d937b52f0c7${endPoint}`;

//   const addItemToCartHandler = async (item) => {
//     console.log("in addITemToCartHanlder");
//     const resp = await fetch(crudcrud, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await resp.json();
//     const exisistingIndex = data.findIndex((id) => id.id === item.id);
//     const exisistingItem = data[exisistingIndex];
  
//     if (exisistingItem) {
//       const api = crudcrud + "/" + exisistingItem._id;
//       const id = exisistingItem._id;
//       console.log(id);
//       console.log("in if", api);
//       const updatedValue = {
//         id: item.id,
//         img: item.img,
//         quantity: +exisistingItem.quantity+item.quantity,
//         price: item.price,
//         title: item.title,
//       };
//       console.log(updatedValue);
//       const res = await fetch(api, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedValue),
//       });
//       console.log("in checking ", res);
//       if (res.ok) {
//         dispachCartAction({ type: "ADD", item: updatedValue });
//       }
//     } else {
//       console.log("in else");
//       const resp = await fetch(crudcrud, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item),
//       });
//       const data = await resp.json();
//       dispachCartAction({ type: "ADD", item: data });
//     }
//   };
//   const removeItemFormCartHandler = async (id) => {
//     const res = await fetch(`${crudcrud}/${id}`, {
//       method: "Delete",
//     });
//     dispachCartAction({ type: "REM", id });
//   };
//   const emptyHandler = async () => {
//     const keys = cartState.items.map((id) => {
//       return id._id;
//     });
//     console.log("emptyHandler");
//     console.log("in if");
//     keys.forEach(async (element) => {
//       console.log(element);
//       const resp = await fetch(`${crudcrud}/${element}`, {
//         method: "DELETE",
//       });
//     });

//     dispachCartAction("EMPTY");
//   };
//   const loginHandler = (token, end) => {
//     console.log(token);
//     setToken(token);
//     setEndpoint(end);
//     localStorage.setItem("token", token);
//     localStorage.setItem("endpoint", end);
//   };
//   const logoutHandler = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("endpoint");
//     setToken(null);
//     clearCartHandler();
//   };
//   async function showItemCrudHandler(check) {
//     console.log(check, "showItem");
//     const res = await fetch(crudcrud, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await res.json();
//     console.log(data);
//     data.map((item) => ( initialCartfromCrud(item))
   
//     );
//   }
//   function initialCartfromCrud(data) {
//     console.log("initialCart");
//     dispachCartAction({ type: "CART", item: data });
//   }
//   function clearCartHandler() {
//     dispachCartAction("EMPTY");
//   }
//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFormCartHandler,
//     empty: emptyHandler,
//     token: token,
//     isLoggedIn: userIsIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//     showItem: showItemCrudHandler,
//     initialCart: initialCartfromCrud,
//     clearCart: clearCartHandler,
//   };
//   console.log(cartContext.items);
//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
