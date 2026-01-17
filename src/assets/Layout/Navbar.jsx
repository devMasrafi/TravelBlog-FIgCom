import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="p-4">
      {/* Navigation Links */}
      <ul className="flex gap-5 items-center justify-around capitalize bg-white px-3 py-4 rounded-3xl shadow-md">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/article">Articles</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
