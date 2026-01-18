import React from "react";
import { Link } from "react-router";
import { useTheme } from "../codeSnipets/ThemeContext";

const Navbar = () => {
  const { isTheme, toggleTheme } = useTheme();

  return (
    <nav className="p-4">
      {/* Navigation Links */}
      <ul className="flex gap-5 items-center justify-around capitalize bg-white dark:bg-gray-800 px-3 py-4 rounded-3xl shadow-md">
        <li>
          <Link
            to="/"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/article"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
