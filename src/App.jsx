import React from "react";
import { Route, Routes } from "react-router";
import Home from "./assets/Pages/Home";
import Article from "./assets/Pages/Article";
import About from "./assets/Pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={Article} />
      <Route path="/about" element={About} />
    </Routes>
  );
}

export default App;
