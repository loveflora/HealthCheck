import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Main from "./Components/Main";
import BMI from "./Components/BWH/BMI";
import BMR from "./Components/BWH/BMR";
import BMR1 from "./Components/BWH/BMR1";
import BMR2 from "./Components/BWH/BMR2";
import BMR3 from "./Components/BWH/BMR3";
import Nutrition from "./Components/BWH/Nutrition";
import BP from "./Components/BP/BP";
import BSTResult1 from "./Components/BST/BSTResult1";
import BSTResult2 from "./Components/BST/BSTResult2";
import BPInfo from "./Components/BP/BPInfo";
import BPSuggest from "./Components/BP/BPSuggest";
import BST from "./Components/BST/BST";
import BSTInfo from "./Components/BST/BSTInfo";
import BSTSuggest from "./Components/BST/BSTSuggest";
import BPResult from "./Components/BP/BPResult";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/BMR" element={<BMR />} />
        <Route path="/BMR/1" element={<BMR1 />} />
        <Route path="/BMR/2" element={<BMR2 />} />
        <Route path="/BMR/3" element={<BMR3 />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/BP" element={<BP />} />
        <Route path="/BP/Result" element={<BPResult />} />
        <Route path="/BST/Result1" element={<BSTResult1 />} />
        <Route path="/BST/Result2" element={<BSTResult2 />} />
        <Route path="/BPInfo" element={<BPInfo />} />
        <Route path="/BPSuggest" element={<BPSuggest />} />
        <Route path="/BST" element={<BST />} />
        <Route path="/BSTInfo" element={<BSTInfo />} />
        <Route path="/BSTSuggest" element={<BSTSuggest />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
