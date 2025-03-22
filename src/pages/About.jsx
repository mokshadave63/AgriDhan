import React from "react";

function About() {
  return (
    <div className="page-container">
      <h2>About Us</h2>

      <section className="about-section">
        <h3>Mission & Vision</h3>
        <p>
          We aim to revolutionize farmer credit access by integrating advanced
          data sources and AI-driven risk analysis.
        </p>
      </section>

      <section className="about-section">
        <h3>Team Information</h3>
        <p>
          Our team consists of experts in finance, agri-tech, and AI development.
        </p>
      </section>

      <section className="about-section">
        <h3>Regulatory Compliance</h3>
        <p>
          We adhere to data privacy and financial regulations to protect farmers
          and institutions.
        </p>
      </section>

      <section className="about-section">
        <h3>Contact Form</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default About;
