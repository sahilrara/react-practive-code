import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Hooks from "./components/Hooks";

const App = () => {
  return (
    <div>
      {/* <Header />{" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
      <Hooks />
    </div>
  );
};

export default App;
