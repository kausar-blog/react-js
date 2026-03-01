import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center bg-gray-500 px-6 py-4">
          <h1 className="text-white text-xl font-bold">Hablu-Programmer</h1>

          <ul className="flex gap-6 text-white font-bold">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
