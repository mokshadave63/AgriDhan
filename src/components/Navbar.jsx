import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Agriधन🌾💰</div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/farmer-login" onClick={() => setMenuOpen(false)}>
          Farmer Login
        </Link>
        <Link to="/bank-login" onClick={() => setMenuOpen(false)}>
          Bank Login
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/admin" onClick={() => setMenuOpen(false)}>
          Admin
        </Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-hidden="true"
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
}

export default Navbar;
