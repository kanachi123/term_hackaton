import React from 'react';
import '../../styles/ui/HamburgerButton.css';

export default function HamburgerButton({ children, className = '', ...props }) {
  return (
    <button className={`hamburger-button ${className}`} {...props}>
      {children}
    </button>
  );
}
