import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="app-header">
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hackathons">Hackatons</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>

    </header>
  );
}