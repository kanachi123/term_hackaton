import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/App.css';
import '../../styles/pages/Home.css';
import '../../styles/layouts/Header.css'

export default function Header({ toggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const openLoginModal = () => {
    navigate("/login", {
      state: { backgroundLocation: location },
    });
    // close sidebar if it's open
    if (isOpen && typeof toggleSidebar === "function") toggleSidebar();
  };

  const openSignupModal = () => {
    navigate("/signup", {
      state: { backgroundLocation: location },
    });
    if (isOpen && typeof toggleSidebar === "function") toggleSidebar();
  };

  return (
    <header>
      <div className="header-top">
        <div className="logo">hackamaka</div>

        <div
          className="hamburger-button"
          onClick={() => {
            if (typeof toggleSidebar === "function") toggleSidebar();
          }}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
        >
          ☰
        </div>
      </div>

      {/* Desktop Navigation */}
      {/* <nav className="navigation desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hackathons">Hackatons</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>

        
        <button className="login" onClick={openLoginModal}>Login</button>
        <button className="signup" onClick={openSignupModal}>Sign Up</button>
      </nav> */}
    </header>
  );
}
