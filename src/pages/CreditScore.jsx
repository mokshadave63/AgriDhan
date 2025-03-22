import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

function CreditScore() {
  const [creditScore, setCreditScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // For demonstration, we simulate a farmer ID.
  const farmerId = "dummy-farmer-id";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/credit/${farmerId}/credit-score`)
      .then((res) => {
        console.log("Credit Score Fetched:", res.data.creditScore);
        setCreditScore(res.data.creditScore);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching credit score:", err);
        setError("Failed to fetch credit score. Try again later.");
        setLoading(false);
      });
  }, [farmerId]);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Credit Score Check</h2>
        <p className="text-gray-600 text-center mb-6">
          Your AI-based credit score is calculated based on financial and environmental factors.
        </p>
        
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="mx-auto" style={{ width: "200px" }}>
            <CircularProgressbar
              value={creditScore}
              text={`${creditScore}%`}
              styles={buildStyles({
                textColor: "#333",
                pathColor:
                  creditScore > 80 ? "green" : creditScore > 50 ? "orange" : "red",
                trailColor: "#ddd",
              })}
            />
            <p className="mt-4 text-center text-lg font-medium">
              {creditScore > 80
                ? "Excellent Credit Score!"
                : creditScore > 50
                ? "Good Credit Score!"
                : "Low Credit Score. Improve your profile."}
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <Link
            to="/farmer-dashboard"
            className="text-blue-600 hover:underline text-lg font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreditScore;
