import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering farmers and financial institutions with innovative credit solutions.
          </p>
        </header>

        <div className="space-y-10">
          {/* Mission & Vision Section */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-700">Mission & Vision</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to revolutionize farmer credit access by integrating
              advanced data sources such as live GIS, weather forecasts, soil health metrics,
              and crop yield analytics with AI-driven risk assessments. We envision a future where
              financial institutions can make informed lending decisions, and farmers receive
              fair, tailored credit solutions that empower them to grow and sustain their livelihoods.
            </p>
          </section>

          {/* Team Information Section */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-700">Our Team</h3>
            <p className="mt-4 text-gray-600">
              We are a diverse group of experts from finance, agri-tech, and artificial intelligence.
              Our team's combined expertise ensures that our credit evaluation platform is robust, secure,
              and responsive to the unique needs of the agricultural sector. Our goal is to bridge the
              gap between traditional lending practices and the dynamic challenges faced by farmers.
            </p>
          </section>

          {/* Regulatory Compliance Section */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-700">Regulatory Compliance</h3>
            <p className="mt-4 text-gray-600">
              We adhere to stringent data privacy and financial regulations to ensure the security and
              integrity of our platform. By following global best practices and local regulatory guidelines,
              we protect both the farmers' sensitive data and the interests of financial institutions.
              Our commitment to transparency and compliance underpins every aspect of our service.
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-700">Contact Us</h3>
            <p className="mt-4 text-gray-600">
              Have questions or need further information? Our team is here to help. Reach out to us,
              and we'll get back to you as soon as possible.
            </p>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  rows="4"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Send Message
              </button>

            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
