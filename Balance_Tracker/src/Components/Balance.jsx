import React from "react";

function Balance({ balance }) {
  return (
    <>
      <div>
        <h2 className="text-center text-lg  font-semibold">Your Balance</h2>
        <h1 className="text-center text-3xl font-bold">
          ${balance.toFixed(2)}
        </h1>
      </div>
    </>
  );
}

export default Balance;
