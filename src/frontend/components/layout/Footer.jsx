import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2025, qti bobo, Inc. All rights reserved.</p>
      <nav>
        <Link to="/terms">Terms</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/support">Support</Link>
        <Link to="/help">Help</Link>
      </nav>
    </footer>
  );
}
