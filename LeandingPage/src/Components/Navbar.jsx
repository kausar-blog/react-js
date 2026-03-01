import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center bg-gray-500 px-6 py-4">
          <h1 className="text-white text-xl font-bold">Hablu-Programmer</h1>

          <ul className="flex gap-6 text-white font-bold">
            <li className="hover:underline cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:underline cursor-pointer">
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="hover:underline cursor-pointer">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li className="hover:underline cursor-pointer">
              <NavLink to="/Signup">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
