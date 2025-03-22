import React from "react";
import { useNavigate } from "react-router-dom";

function FarmerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Farmer Dashboard
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Welcome, Farmer! Manage your loan applications and credit score here.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section
            onClick={() => navigate("/profile-setup")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Profile Setup
            </h3>
            <p className="mt-2 text-gray-500">
              Update personal details and land ownership info.
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
            onClick={() => navigate("/credit-score")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Credit Score Check
            </h3>
            <p className="mt-2 text-gray-500">
              View AI-based scoring using GIS, soil health, and weather data.
            </p>
          </section>

          <section
            onClick={() => navigate("/loan-status")}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              Loan Application Status
            </h3>
            <p className="mt-2 text-gray-500">
              Track approval, rejection, or disbursal of your loan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
