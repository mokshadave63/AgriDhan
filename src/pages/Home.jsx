import React from "react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import Footer from "./Footer";

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

      {/* About the Tool Section */}
      <section className="py-5 bg-light">
        <div className="container d-flex justify-content-center">
          <div
            className="p-4 bg-white shadow rounded text-center"
            style={{ maxWidth: "950px", width: "100%" }}
          >
            <h2 className="mb-3">About the Tool</h2>
            <p className="lead">
              Our platform integrates GIS data, weather forecasts, soil health
              metrics, and AI-based scoring to provide fair and transparent credit
              evaluations for farmers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <div className="container py-5 text-center">
        <h2 className="pb-3">Key Features</h2>

        {/* Bootstrap Row for Horizontal Cards */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <CardComponent
              title="Data Integration"
              text="Aggregates GIS data, weather forecasts, and soil health metrics for accurate insights."
              link="https://www.esri.com/en-us/what-is-gis/overview"
            />
          </div>
          <div className="col">
            <CardComponent
              title="Financial Risk Assessment"
              text="Uses AI-driven scoring to evaluate creditworthiness with transparency and fairness."
              link="https://www.worldbank.org/en/topic/financialsector/brief/credit-scoring-approach"
            />
          </div>
          <div className="col">
            <CardComponent
              title="Scalability and Adaptability"
              text="Designed to support diverse agricultural needs, enhance efficiency, and expand seamlessly."
              link="https://aws.amazon.com/what-is/scalability/"
            />
          </div>
        </div>
      </div>

      {/* Who Can Use It? Section */}
      <section className="info-section text-center">
        <div className="container">
          <h2>Who Can Use It?</h2>
          <p>
            Farmers, Banks, and NBFCs can all benefit from our inclusive credit
            evaluation system.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
