import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Alternative Credit Evaluation Tool</h1>
          <p>
            Empowering farmers with AI-driven credit scoring based on GIS, weather,
            and soil data.
          </p>
          <div className="hero-cta">
            <Link to="/farmer-login" className="cta-btn">
              Get Started (Farmers)
            </Link>
            <Link to="/bank-login" className="cta-btn secondary">
              Login (Bank/NBFC)
            </Link>
          </div>
        </div>
      </section>

      {/* About the Tool */}
      <section className="info-section">
        <div className="container">
          <h2>About the Tool</h2>
          <p>
            Our platform integrates GIS data, weather forecasts, soil health
            metrics, and AI-based scoring to provide fair and transparent credit
            evaluations for farmers.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="info-section alternate-bg">
        <div className="container">
          <h2>Key Features</h2>
          <ul>
            <li>Data Integration (GIS, weather, soil, past yields)</li>
            <li>Financial Risk Assessment</li>
            <li>User Accessibility</li>
            <li>Scalability & Adaptability</li>
            <li>Regulatory Compliance</li>
          </ul>
        </div>
      </section>

      {/* Who Can Use It */}
      <section className="info-section">
        <div className="container">
          <h2>Who Can Use It?</h2>
          <p>
            Farmers, Banks, and NBFCs can all benefit from our inclusive credit
            evaluation system.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
