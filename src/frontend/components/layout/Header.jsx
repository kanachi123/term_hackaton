import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/App.css';

import '../../styles/pages/Home.css';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-top">
        <div className="logo">hackaton</div>

        <div
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hackathons">Hackatons</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>

        {/* Кнопки login/signup, скрытые на десктоп */}
        <div className={`auth-buttons ${menuOpen ? "active" : ""}`}>
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
