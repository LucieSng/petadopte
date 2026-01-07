// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import DonationPage from "./pages/DonationPage";
import CtaDonation from "./components/CtaDonation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AdoptPage" element={<AdoptPage />} />
          <Route path="/DonationPage" element={<DonationPage />} />
        </Routes>
        <CtaDonation />
      </Router>
    </div>
  );
}

export default App;
