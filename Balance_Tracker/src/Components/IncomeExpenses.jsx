import React from "react";

function IncomeExpenses({ income, expenses }) {
  return (
    <>
      <div className="flex justify-around">
        <div className="text-green-500">
          <h3>Total Income</h3>
          <p className="text-xl">${income.toFixed(2)}</p>
        </div>
        <div className="text-red-500">
          <h3>Total Expenses</h3>
          <p className="text-xl">${expenses.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
