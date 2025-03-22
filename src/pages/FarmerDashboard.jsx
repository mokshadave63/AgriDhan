import React from "react";

function FarmerDashboard() {
  return (
    <div className="page-container">
      <h2>Farmer Dashboard</h2>
      <p>
        Welcome, Farmer! Manage your loan applications and credit score here.
      </p>

      <section className="dashboard-section">
        <h3>Profile Setup</h3>
        <p>Update personal details and land ownership info.</p>
      </section>

      <section className="dashboard-section">
        <h3>Apply for Loan</h3>
        <p>Enter land details, crop history, and expected yield.</p>
      </section>

      <section className="dashboard-section">
        <h3>Credit Score Check</h3>
        <p>View AI-based scoring using GIS, soil health, and weather data.</p>
      </section>

      <section className="dashboard-section">
        <h3>Loan Application Status</h3>
        <p>Track approval, rejection, or disbursal of your loan.</p>
      </section>
    </div>
  );
}

export default FarmerDashboard;
