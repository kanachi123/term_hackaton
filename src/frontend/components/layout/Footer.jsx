import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/index.css';
export default function Footer() {
  return (
    <footer className="app-footer">
      <nav>
        <Link to="/terms">Terms </Link>
        <Link to="/privacy">Privacy </Link>
        <Link to="/support">Support </Link>
        <Link to="/help">
        <div><p>Help</p></div>
        </Link>
        <p>© 2025, qti bobo, Inc. All rights reserved.</p>
      
      </nav>
      
    </footer>
  );
}
