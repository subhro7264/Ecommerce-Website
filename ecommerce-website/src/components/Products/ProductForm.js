// import React, { useRef, useState } from "react";
// import Input from "../UI/Input";
// import { Button } from "react-bootstrap";

// const Form = (props) => {
//   const [amountIsValid, setAmountIsValid] = useState(true);
//   const amountInputRef = useRef();


//   const submitHandler = (e) => {
//     e.preventDefault();
//     const enteredAmount = amountInputRef.current.value;
//     const enteredAmountStringToNumber = +enteredAmount;

//     if (
//       enteredAmount.trim().length === 0 ||
//       enteredAmountStringToNumber < 1 ||
//       enteredAmountStringToNumber > 5
//     ) {
//       setAmountIsValid(false);
//       return;
//     }
//     props.onAddToCart(enteredAmountStringToNumber);
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
//           max: "10",
//           defaultValue: "1",
//         }}
//       />
//       <Button type="submit" >
        
//         + Add To Cart
//       </Button>
//       {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
//     </form>
//   );
// };
// export default Form;





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
