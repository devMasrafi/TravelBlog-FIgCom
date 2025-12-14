import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./assets/Pages/Home";
import Article from "./assets/Pages/Article";
import About from "./assets/Pages/About";
import MainLayout from "./assets/Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
