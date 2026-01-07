// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
