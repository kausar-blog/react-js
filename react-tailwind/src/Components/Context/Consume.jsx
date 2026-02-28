import React, { useContext } from "react";
import ThemeContext from "./ContextAPI";

function ThemeToggler() {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={` ${theme === "light" ? "bg-white" : "bg-gray-900"} h-dvh`}
      >
        <p className="text-red-600 font-bold text-4xl">
          The current theme is: {theme}
        </p>
        <button
          onClick={ToggleTheme}
          className={` px-4 py-2 bg-green-500 m-5 rounded-full border-none text-white font-extrabold text-3xl `}
        >
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
    </>
  );
}

export default ThemeToggler;

/* 
import React, { useContext } from "react";
import ThemeContext from "./ContextAPI";

function ThemeToggler() {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <p className="text-xl mb-4">The current theme is: {theme}</p>
      <button
        onClick={ToggleTheme}
        className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
          ${theme === "light" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-black hover:bg-gray-300"}
        `}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default ThemeToggler;
 */
