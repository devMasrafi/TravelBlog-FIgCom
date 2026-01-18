import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./assets/Pages/Home";
import Article from "./assets/Pages/Article";
import About from "./assets/Pages/About";
import MainLayout from "./assets/Layout/MainLayout";
import { ThemeProvider } from "./assets/codeSnipets/ThemeContext";
import ScrolltoTop from "./assets/codeSnipets/ScrolltoTop";
import Contact from "./assets/Pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrolltoTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
