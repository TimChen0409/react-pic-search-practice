import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotfound from "./pages/PageNotfound";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
