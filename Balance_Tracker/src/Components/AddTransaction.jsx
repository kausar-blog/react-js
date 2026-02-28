import React, { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || amount === 0) return;

    addTransaction({ id: Math.random(), text, amount: +amount });
    setText("");
    setAmount(0);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-sm m-auto ">
        <input
          type="text"
          value={text}
          placeholder="Please add details"
          className="p-2 m-2 border border-indigo-500"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Please add amount"
          className="p-2 m-2 border border-indigo-500"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 m-2 rounded"
        >
          Add Amount
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
