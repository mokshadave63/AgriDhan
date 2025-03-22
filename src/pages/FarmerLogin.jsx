import React from "react";
import { Link, useNavigate } from "react-router-dom";

function FarmerLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login and redirect to the dashboard
    navigate("/farmer-dashboard");
  };

  return (
    <div className="page-container center-content">
      <h2>Farmer Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default FarmerLogin;
