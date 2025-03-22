import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import BankLogin from "./pages/BankLogin";
import FarmerDashboard from "./pages/FarmerDashboard";
import BankDashboard from "./pages/BankDashboard";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/bank-login" element={<BankLogin />} />
        <Route path="/bank-dashboard" element={<BankDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
