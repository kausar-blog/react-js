import { useState, useCallback } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((preData) => preData + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((preData) => preData - 1);
  }, []);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button
          onClick={increment}
          className=" border m-2 p-1 bg-green-500 text-white font-bold rounded-full"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className=" border m-2 p-1 bg-red-500 text-white font-bold rounded-full"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default MyCounter;
