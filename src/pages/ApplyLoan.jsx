import React, { useState } from "react";
import { Link } from "react-router-dom";

function ApplyLoan() {
  const [formData, setFormData] = useState({
    landArea: "",
    cropType: "",
    previousYield: "",
    expectedYield: "",
    irrigationType: "",
    soilCondition: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API call to submit the loan application
    console.log("Loan Application Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Apply for Loan</h2>
        <p className="text-gray-600 mb-8 text-center">
          Enter your land details, crop history, and expected yield to apply for a loan.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="landArea" className="block text-gray-700 font-medium mb-2">
                Land Area (in acres)
              </label>
              <input
                type="number"
                id="landArea"
                name="landArea"
                value={formData.landArea}
                onChange={handleChange}
                placeholder="e.g., 10"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cropType" className="block text-gray-700 font-medium mb-2">
                Crop Type
              </label>
              <input
                type="text"
                id="cropType"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                placeholder="e.g., Wheat"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="previousYield" className="block text-gray-700 font-medium mb-2">
                Previous Yield (in tons)
              </label>
              <input
                type="number"
                id="previousYield"
                name="previousYield"
                value={formData.previousYield}
                onChange={handleChange}
                placeholder="e.g., 5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expectedYield" className="block text-gray-700 font-medium mb-2">
                Expected Yield (in tons)
              </label>
              <input
                type="number"
                id="expectedYield"
                name="expectedYield"
                value={formData.expectedYield}
                onChange={handleChange}
                placeholder="e.g., 7"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="irrigationType" className="block text-gray-700 font-medium mb-2">
                Irrigation Type
              </label>
              <select
                id="irrigationType"
                name="irrigationType"
                value={formData.irrigationType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="drip">Drip</option>
                <option value="sprinkler">Sprinkler</option>
                <option value="surface">Surface</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="soilCondition" className="block text-gray-700 font-medium mb-2">
                Soil Condition
              </label>
              <select
                id="soilCondition"
                name="soilCondition"
                value={formData.soilCondition}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="loanAmount" className="block text-gray-700 font-medium mb-2">
                Loan Amount Requested ($)
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="e.g., 5000"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#213547] text-white py-2 rounded-md hover:bg-[#89c1f1] transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/farmer-dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplyLoan;
