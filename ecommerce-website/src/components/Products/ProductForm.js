import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import { Button } from "react-bootstrap";

const Form = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();


  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountStringToNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountStringToNumber < 1 ||
      enteredAmountStringToNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountStringToNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          defaultValue: "1",
        }}
      />
      <Button type="submit" >
        {" "}
        + Add To Cart{" "}
      </Button>
      {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};
export default Form;





// import React, { useRef, useState } from "react";
// import Input from "../UI/Input";
// import { Button } from "react-bootstrap";

// const Form = (props) => {
//   const [amountIsValid, setAmountIsValid] = useState(true);
//   const amountInputRef = useRef();

//   const addToCrudCrudHandler = async () => {
//     try {
//       // Get the entered amount from the input field
//       const enteredAmount = amountInputRef.current.value;
//       const enteredAmountStringToNumber = +enteredAmount;

//       // Check if the entered amount is valid (between 1 and 5)
//       if (
//         enteredAmount.trim().length === 0 ||
//         enteredAmountStringToNumber < 1 ||
//         enteredAmountStringToNumber > 5
//       ) {
//         setAmountIsValid(false);
//         return;
//       }

//       // Send a POST request to the API with the entered amount
//       const response = await fetch(
//         "https://crudcrud.com/api/72cacd8487154df8bfaed3faf161364b/useremail",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             amount: enteredAmountStringToNumber,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to add to cart");
//       }

//       const data = await response.json();
//       // Handle success, you can do something with the response data here
//       console.log("Added to cart:", data);

//       // Reset the form and validation
//       amountInputRef.current.value = "";
//       setAmountIsValid(true);
//     } catch (error) {
//       // Handle errors
//       console.error("Error adding to cart:", error);
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     props.onAddToCart(addToCrudCrudHandler());
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <Input
//         ref={amountInputRef}
//         label="Amount"
//         input={{
//           id: "amount",
//           type: "number",
//           min: "1",
//           max: "5", // Update max to 5
//           defaultValue: "1",
//         }}
//       />
//       <Button type="submit">+ Add To Cart</Button>
//       {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
//     </form>
//   );
// };

// export default Form;

