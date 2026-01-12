// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AdoptPage from "./pages/AdoptPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AdoptPage" element={<AdoptPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
