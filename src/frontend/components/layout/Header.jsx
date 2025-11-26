import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/App.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">hackaton</div>
      </header>

      <div className={`navigation ${menuOpen ? "active" : ""}`} id="nav">
        <Link to="/" className="login">Home</Link>
        <Link to="/about" className="signup">About</Link>
        <Link to="/hackathons">Hackatons</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>

        <div
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </>
  );
}
