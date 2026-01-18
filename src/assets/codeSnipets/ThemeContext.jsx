import React, { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();
const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
  const [isTheme, setTheme] = useState(() => {
    const saved = localStorage.getItem("isTheme");
    return saved ? JSON.parse(saved) : false;
  });

  //   save to local
  useEffect(() => {
    localStorage.setItem("isTheme", JSON.stringify(isTheme));
    document.documentElement.classList.toggle("dark", isTheme);
  }, [isTheme]);

  // toggle theme
  const toggleTheme = () => setTheme(!isTheme);

  return (
    <themeContext.Provider value={{ isTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
