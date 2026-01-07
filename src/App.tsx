// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Routes></Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
