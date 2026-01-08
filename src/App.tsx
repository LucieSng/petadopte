// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ContainerCards from "./components/ContainerCards";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ContainerCards />
      </Router>
    </div>
  );
}

export default App;
