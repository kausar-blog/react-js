import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };

    default:
      throw new Error("The Unknown Action Type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const Increment = () => {
    dispatch({ type: "Increment" });
  };
  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <div>
        <p>Count: {state.count}</p>
        <button
          onClick={Increment}
          className=" border m-2 p-1 bg-green-500 text-white font-bold rounded-full"
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          className=" border m-2 p-1 bg-red-500 text-white font-bold rounded-full"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
