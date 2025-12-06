import React from "react";
import HamburgerButton from '../ui/HamburgerButton';
import '../../styles/index.css';
import '../../styles/App.css';
import '../../styles/pages/Home.css';
import '../../styles/layouts/Header.css'

export default function Header({ toggleSidebar, isOpen }) {

  return (
    <header>
      <div className="header-top">
        <div className="logo">hackamaka</div>

        <HamburgerButton
          onClick={() => {
            if (typeof toggleSidebar === "function") toggleSidebar();
          }}
          aria-label="Toggle navigation"
          tabIndex={0}
        >
          ☰
        </HamburgerButton>
      </div>

    </header>
  );
}
