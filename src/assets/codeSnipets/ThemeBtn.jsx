import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeBtn = () => {
  const { isTheme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
      >
        {isTheme ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default ThemeBtn;
