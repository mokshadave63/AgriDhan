import React from "react";
import { Link } from "react-router-dom";

function RiskAssessmentReports() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Risk Assessment Reports
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Indicators based on soil, weather, and past yield.
        </p>
        {/* Placeholder for risk assessment report details */}
        <div className="mt-4">
          <p>Risk assessment reports and analytics will be available here.</p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/bank-dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RiskAssessmentReports;
