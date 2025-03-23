import React from "react";
import { Link } from "react-router-dom";

function DecisionSupport() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Decision Support
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Approve, reject, or request more info from farmers.
        </p>
        {/* Placeholder for decision support tools and details */}
        <div className="mt-4">
          <p>Decision support options and tools will be displayed here.</p>
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

export default DecisionSupport;
