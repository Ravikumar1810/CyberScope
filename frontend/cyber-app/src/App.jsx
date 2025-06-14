import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashbord from "./pages/Dashbord";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashbord" element={<Dashbord />} />
      </Routes>
    </Router>
  );
}
