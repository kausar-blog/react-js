import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Error() {
  let Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/About");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
        <h1 className="text-8xl font-extrabold text-indigo-600">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          This page does not exist. Please return home.
        </p>
        <button
          onClick={handleClick}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Back About
        </button>{" "}
        <br />
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Back Home
        </Link>
      </div>
    </>
  );
}

export default Error;
