import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/index.css';
import '../../styles/layouts/Footer.css'
export default function Footer() {
  return (
    <footer className="app-footer">
      
        
      <nav>
        <Link to="/terms">Terms </Link>
        <Link to="/privacy">Privacy </Link>
        <Link to="/support">Support </Link>
        <Link to="/help">
        Help
        </Link>
      
      </nav>
      <p>© 2025, qti bobo, Inc. All rights reserved.</p>
      
    </footer>
  );
}
