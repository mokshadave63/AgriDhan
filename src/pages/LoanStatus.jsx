import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoanStatus() {
  const [loanStatus, setLoanStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Simulated farmer ID (replace later with actual data)
  const farmerId = "dummy-farmer-id";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/loans/${farmerId}/status`)
      .then((res) => {
        setLoanStatus(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching loan status:", err);
        setError("Failed to fetch loan status. Try again later.");
        setLoading(false);
      });
  }, [farmerId]);

  return (
    <div className="loan-status-container" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Loan Application Status</h2>
      {loading ? (
        <p>Loading loan status...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : loanStatus ? (
        <div>
          <h3>Status: {loanStatus.status}</h3>
          <p>Application Date: {new Date(loanStatus.applicationDate).toLocaleDateString()}</p>
          <p>Approved Amount: ${loanStatus.approvedAmount}</p>
          <p>Remarks: {loanStatus.remarks}</p>
        </div>
      ) : (
        <p>No loan application found.</p>
      )}
      <div style={{ marginTop: "1rem" }}>
        <Link to="/farmer-dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default LoanStatus;
