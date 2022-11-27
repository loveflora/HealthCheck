import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import BMI from "./Components/BMI";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BMI" element={<BMI />} />
        {/* <Route path="/BP" element={<BP />} /> */}
        {/* <Route path="/BST" element={<BST />} /> */}
      </Routes>
    </>
  );
}

export default App;
