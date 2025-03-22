import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BankLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Auth logic here
    navigate("/bank-dashboard");
  };

  return (
    <div className="page-container center-content">
      <h2>Bank/NBFC Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="text" placeholder="Bank/NBFC ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BankLogin;
