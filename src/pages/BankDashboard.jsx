import React from "react";

function BankDashboard() {
  return (
    <div className="page-container">
      <h2>Bank/NBFC Dashboard</h2>
      <p>View and process farmer loan applications.</p>

      <section className="dashboard-section">
        <h3>Farmer Applications</h3>
        <p>View, filter, and process loan applications.</p>
      </section>

      <section className="dashboard-section">
        <h3>Credit Scoring System</h3>
        <p>AI-generated scores with explainable insights.</p>
      </section>

      <section className="dashboard-section">
        <h3>Risk Assessment Reports</h3>
        <p>Indicators based on soil, weather, and past yield.</p>
      </section>

      <section className="dashboard-section">
        <h3>Decision Support</h3>
        <p>Approve, reject, or request more info from farmers.</p>
      </section>
    </div>
  );
}

export default BankDashboard;
