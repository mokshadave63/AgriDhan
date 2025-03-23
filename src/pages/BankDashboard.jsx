import React from "react";
import { useNavigate } from "react-router-dom";

function BankDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Bank/NBFC Dashboard
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            View and process farmer loan applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section
            onClick={() => navigate("/farmer-applications")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Farmer Applications
            </h3>
            <p className="mt-2 text-gray-500">
              View, filter, and process loan applications.
            </p>
          </section>

          <section
            onClick={() => navigate("/apply-loan")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Apply for Loan
            </h3>
            <p className="mt-2 text-gray-500">
              Enter land details, crop history, and expected yield.
            </p>
          </section>

          <section
            onClick={() => navigate("/credit-scoring")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Credit Scoring System
            </h3>
            <p className="mt-2 text-gray-500">
              AI-generated scores with explainable insights.
            </p>
          </section>

          <section
            onClick={() => navigate("/risk-reports")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Risk Assessment Reports
            </h3>
            <p className="mt-2 text-gray-500">
              Indicators based on soil, weather, and past yield.
            </p>
          </section>

          <section
            onClick={() => navigate("/decision-support")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Decision Support
            </h3>
            <p className="mt-2 text-gray-500">
              Approve, reject, or request more info from farmers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BankDashboard;
