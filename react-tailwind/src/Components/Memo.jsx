import React, { memo, useState } from "react";

//  Child component
const Child = memo(({ count }) => {
  console.log("Child component is rendering");

  return <p>Count: {count}</p>;
});

// parent component
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const CountHandle = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <Child count={count} />
        <button className="bg-indigo-500" onClick={CountHandle}>
          Increment
        </button>
        <p>Name: {name}</p>
        <input
          className="border border-green-600"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Parent;
