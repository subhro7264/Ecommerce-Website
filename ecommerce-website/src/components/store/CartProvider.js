// import { useEffect, useReducer, useState } from "react";
// import CartContext from "./cart-context";
// import axios from "axios";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       const updatedTotalAmount =
//         state.totalAmount + action.item.price * action.item.amount;
//       const existingCartItemIndex = state.items.findIndex(
//         (item) => item.id === action.item.id
//       );
//       let updatedItems;
//       if (existingCartItemIndex >= 0) {
//         const existingCartItem = state.items[existingCartItemIndex];
//         const updatedItem = {
//           ...existingCartItem,
//           amount: existingCartItem.amount + action.item.amount,
//         };
//         updatedItems = [...state.items];
//         updatedItems[existingCartItemIndex] = updatedItem;
//       } else {
//         updatedItems = state.items.concat(action.item);
//       }
//       return {
//         items: updatedItems,
//         totalAmount: updatedTotalAmount,
//       };

//     case "REMOVE":
//       const itemIndex = state.items.findIndex((item) => item.id === action.id);
//       const item = state.items[itemIndex];
//       const updatedTotal = state.totalAmount - item.price;
//       let newItems;
//       if (item.amount === 1) {
//         newItems = state.items.filter((item) => item.id !== action.id);
//       } else {
//         const newItem = { ...item, amount: item.amount - 1 };
//         newItems = [...state.items];
//         newItems[itemIndex] = newItem;
//       }
//       return {
//         items: newItems,
//         totalAmount: updatedTotal,
//       };

//     default:
//       return defaultCartState;
//   }

// };

// const CartProvider = (props) => {
//   const initialToken = localStorage.getItem("token");
//   const [token, setToken] = useState(initialToken);
//   const userIsLoggedIn = !!token; //its convert to true or false value;
//   const initialEndPoint = localStorage.getItem("endpoint");
//   const [endPoint, setEndpoint] = useState(initialEndPoint);

//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

//   /*--------------------------------------->LOGIN HANDLER<---------------------------- */
//   const loginHandler = (token, end) => {
//     setToken(token);
//     localStorage.setItem("token", token);
//     setEndpoint(end);
//     localStorage.setItem("endpoint", end);
//   };
//   /*--------------------------------------->LOGOUT HANDLER<---------------------------- */
//   const logoutHandler = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("endpoint");
//   };

//   /*--------------------------------> GET DATA FROM CRUD CRUD <---------------------------------------- */

//   const crudCrud = `https://crudcrud.com/api/0d3ff7932fa842dc890f6a5118b43f13${endPoint}`;

// /*---------------------------------------------------------------------------------- */
//   const getDataFromCrud = async () => {
//     try {
//       const response = await axios.get(crudCrud);
//       const data = response.data; // Get the data from the response
//       console.log(" GET_Data_From_Crud", data);
//       //  can use this data or dispatch it to the cart context

//       dispatchCartAction({ type: "ADD", item: data });
//     } catch (error) {
//       console.log("Error To Get Data From Crud:", error);
//     }
//   };

//   useEffect(() => {
//     getDataFromCrud();
//   }, [token,crudCrud]);

//   /*----------------------------->Add to cart handler<----------------------------------- */

//   // const addItemToCartHandler = async (item) => {
//   //   try {
//   //     const response = await axios.post(crudCrud,item);

//   //     if (!response.ok) {
//   //       throw new Error("Failed to add to cart");
//   //     }

//   //     const data = await response.data;
//   //     // Handle success, you can do something with the response data here
//   //     console.log("Added to cart:",data);
//   //     dispatchCartAction({ type: "ADD", item:data});
//   //   } catch (error) {
//   //     //   // Handle errors
//   //     console.error("Error adding to cart:", error);
//   //   }
//   // };

//   const addItemToCartHandler = async (item) => {
//     try {
//       const response = await fetch(crudCrud, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add to cart");
//       }

//       const data = await response.json();
//       // Handle success, you can do something with the response data here
//       console.log("Added to cart:", data);
//       console.log(item);
//       dispatchCartAction({ type: "ADD", item });
//     } catch (error) {
//       //   // Handle errors
//       console.error("Error adding to cart:", error);
//     }
//   };

//   /*---------------------------------------------------------->REMOVE FROM CART HANDLER<----------------------------------------------- */

//   const removeItemFromCartHandler = async (id) => {
//     dispatchCartAction({ type: "REMOVE", id });
//   };

//   const cartContextValue = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//     token: token, //token state manage
//     isLoggedIn: userIsLoggedIn,
//     email: endPoint,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import { useEffect, useReducer, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

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

/*------------------------------------------------> CART-PROVIDE FUNCTION <---------------------------------------------------*/

const CartProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const initialEndPoint = localStorage.getItem("endpoint");
  const [endPoint, setEndpoint] = useState(initialEndPoint);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  /*--------------------------------------->LOGIN HANDLER <-------------------------*/

  const loginHandler = (token, end) => {
    setToken(token);
    localStorage.setItem("token", token);
    setEndpoint(end);
    localStorage.setItem("endpoint", end);
  };
  /*--------------------------------------->LOGOUT HANDLER <-------------------------*/
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("endpoint");
  };

  const crudCrud = `https://crudcrud.com/api/8619995789874416918e44be98add5c0${endPoint}`;

  /*--------------------------------->GET DATA FROM  CRUD CRUD <------------------------------ */

    const getDataFromCrud =async () => {
      try {
        const response = await axios.get(crudCrud);
        const data = await response.data;
        console.log("GET_Data_From_Crud", data);

        // Loop through the data to add items to the cart
        data.forEach((item) => {
          dispatchCartAction({ type: "ADD", item });
        });
      } catch (error) {
        console.log("Error To Get Data From Crud:", error);
      }
    }
    useEffect(() => {
    getDataFromCrud();
  }, [crudCrud]);

  /*-------------------------------> ADD ITEM TO CART AND POST REQUEST TO CRUD-CRUD<----------------------------------*/

  const addItemToCartHandler = async (item) => {
    try {
      const response = await fetch(crudCrud, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await response.json();
      console.log("Added to cart:", data);
      dispatchCartAction({ type: "ADD", item });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  /*---------------------------------------------------------->REMOVE FROM CART HANDLER<----------------------------------------------- */
  const removeItemFromCartHandler = async (id) => {
    // try {
    //   const response = await axios.delete(`${crudCrud}/${id}`);
    //   const data = response.data;
    //  console.log("delete:",data);
        dispatchCartAction({ type: "REMOVE", id});
      
    // } catch (err) {
    //   // Handle errors here
    //   console.error("Error removing item from cart:", err);
    // }
  };
  

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: endPoint,
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
