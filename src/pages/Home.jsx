import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For smooth animations
import { FaChartLine, FaRegBuilding, FaSeedling, FaDatabase, FaUsers, FaShieldAlt } from "react-icons/fa"; // Professional icons

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent ">
            Alternative Credit Evaluation Tool
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Empowering farmers with **AI-driven** credit scoring based on **GIS, weather,** and **soil data**.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <Link 
              to="/farmer-login"
              className="px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Get Started (Farmers)
            </Link>
            <Link 
              to="/bank-login"
              className="px-6 py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Login (Bank/NBFC)
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About the Tool */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">About the Tool</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Our **AI-powered** platform integrates **GIS data, weather forecasts, soil health metrics**, and **ML-based scoring** to provide **fair and transparent** credit evaluations.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white">Key Features</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            {[
              { icon: <FaDatabase />, title: "Data Integration", desc: "Live GIS, Weather & Soil Metrics" },
              { icon: <FaChartLine />, title: "AI-Driven Scoring", desc: "Machine Learning for risk profiling" },
              { icon: <FaShieldAlt />, title: "Regulatory Compliance", desc: "Aligned with financial security protocols" },
              { icon: <FaRegBuilding />, title: "Financial Risk Analysis", desc: "Tailored insights for banks & NBFCs" },
              { icon: <FaUsers />, title: "Accessibility", desc: "Designed for all stakeholders (Farmers, Banks)" },
              { icon: <FaSeedling />, title: "Scalability & Adaptability", desc: "Supports diverse regional conditions" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-white text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Can Use It? */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Who Can Use It?</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Farmers, **Banks**, and **NBFCs** can all benefit from our inclusive credit evaluation system.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;