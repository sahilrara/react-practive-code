import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Hooks from "./components/Hooks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/hooks" element={<Hooks />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
