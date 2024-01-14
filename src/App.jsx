import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Dashboard from "./dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div className="bg-[#040B11] text-[#fff]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
