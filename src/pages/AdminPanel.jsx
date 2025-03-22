import React from "react";

function AdminPanel() {
  return (
    <div className="page-container">
      <h2>Admin Panel</h2>
      <p>Manage users, system data, and analytics.</p>

      <section className="dashboard-section">
        <h3>Manage Users</h3>
        <p>Farmers, Banks, NBFCs.</p>
      </section>

      <section className="dashboard-section">
        <h3>System Logs & Analytics</h3>
        <p>View loan applications processed, risk analysis trends.</p>
      </section>

      <section className="dashboard-section">
        <h3>Data Integrations</h3>
        <p>Update GIS, weather, and soil data APIs.</p>
      </section>

      <section className="dashboard-section">
        <h3>Compliance Tracking</h3>
        <p>Ensure adherence to financial laws.</p>
      </section>
    </div>
  );
}

export default AdminPanel;
