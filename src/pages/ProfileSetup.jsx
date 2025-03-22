import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileSetup() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    incomeStability: "",
    pastLoanRepayment: "",
    landArea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API call
    console.log("Profile Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Setup</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please fill in your details to complete your profile.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State or Region"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="incomeStability"
              className="block text-gray-700 font-medium mb-2"
            >
              Income Stability (Monthly Income in $)
            </label>
            <input
              type="number"
              id="incomeStability"
              name="incomeStability"
              value={formData.incomeStability}
              onChange={handleChange}
              placeholder="Enter your monthly income"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pastLoanRepayment"
              className="block text-gray-700 font-medium mb-2"
            >
              Past Loan Repayment History
            </label>
            <select
              id="pastLoanRepayment"
              name="pastLoanRepayment"
              value={formData.pastLoanRepayment}
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
          <div className="mb-6">
            <label
              htmlFor="landArea"
              className="block text-gray-700 font-medium mb-2"
            >
              Land Area (in acres)
            </label>
            <input
              type="number"
              id="landArea"
              name="landArea"
              value={formData.landArea}
              onChange={handleChange}
              placeholder="Enter your land area"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Save Profile
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/farmer-dashboard"
            className="text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
