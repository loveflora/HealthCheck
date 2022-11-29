import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import BMI from "./Components/BWH/BMI";
import { RecoilRoot } from "recoil";
import BP from "./Components/BP/BP";
import BST from "./Components/BST/BST";
import BMR from "./Components/BWH/BMR";
import Nutrition from "./Components/BWH/Nutrition";
import BPInfo from "./Components/BP/BPInfo";
import BPSuggest from "./Components/BP/BPSuggest";
import BSTInfo from "./Components/BST/BSTInfo";
import BSTSuggest from "./Components/BST/BSTSuggest";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/BP" element={<BP />} />
        <Route path="/BST" element={<BST />} />
        <Route path="/BMR" element={<BMR />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/BPInfo" element={<BPInfo />} />
        <Route path="/BPSuggest" element={<BPSuggest />} />
        <Route path="/BSTInfo" element={<BSTInfo />} />
        <Route path="/BSTSuggest" element={<BSTSuggest />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
