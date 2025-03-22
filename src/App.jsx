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
<<<<<<< HEAD
import ProfileSetup from "./pages/ProfileSetup";
import ApplyLoan from "./pages/ApplyLoan";
import CreditScore from "./pages/CreditScore";
import LoanStatus from "./pages/LoanStatus";
=======
>>>>>>> f97689c8d221b961df4b431a36c3490332ec9a84

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer-login" element={<FarmerLogin />} />
<<<<<<< HEAD
        <Route path="/bank-login" element={<BankLogin />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/bank-dashboard" element={<BankDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/loan-status" element={<LoanStatus />} />
=======
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/bank-login" element={<BankLogin />} />
        <Route path="/bank-dashboard" element={<BankDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
>>>>>>> f97689c8d221b961df4b431a36c3490332ec9a84
      </Routes>
    </Router>
  );
}

export default App;
