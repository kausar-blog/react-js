import React from "react";

function TransactionList({ transactions }) {
  return (
    <>
      <ul className="list-none">
        {transactions.map((transaction) => (
          <li
            // eslint-disable-next-line react-hooks/purity
            key={Math.random()}
            className={`flex justify-between m-2 p-2 border border-gray-300 rounded font-bold  ${transaction.amount > 0 ? "bg-green-500" : "bg-red-500"}`}
          >
            <span>{transaction.text}</span>
            <span>${transaction.amount}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
