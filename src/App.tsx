// import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Adopte from "./pages/Adopte";
import DonPage from "./pages/DonPage";
import CtaDon from "./components/CtaDon";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Adopte" element={<Adopte />} />
          <Route path="/DonPage" element={<DonPage />} />
        </Routes>
        <CtaDon />
      </Router>
    </div>
  );
}

export default App;
