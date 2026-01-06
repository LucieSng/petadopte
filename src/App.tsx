// import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Adopte from "./pages/Adopte";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Adopte" element={<Adopte />} />
      </Routes>
    </Router>
  );
}

export default App;
