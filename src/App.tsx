// import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/adopte" element={<AdoptPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
