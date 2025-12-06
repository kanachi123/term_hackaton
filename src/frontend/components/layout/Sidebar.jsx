import React, { useState } from "react";
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import Button from '../ui/Button';


// eslint-disable-next-line no-unused-vars
import Modal from '../ui/Modal';
// eslint-disable-next-line no-unused-vars
import Login from '../../pages/Login';
// eslint-disable-next-line no-unused-vars
import Signup from '../../pages/Signup';
import '../../styles/index.css';
import '../../styles/App.css';
import '../../styles/layouts/Sidebar.css';

export default function Sidebar({ open = true, toggleSidebar }) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Team", path: "/dashboard/team" },
    { name: "User Management", path: "/dashboard/user-management" },
    { name: "LeaderBoard", path: "/dashboard/leaderboard" },
  ];

  const mainNav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Hackatons", path: "/hackathons" },
    { name: "Contact", path: "/contact" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    if (typeof toggleSidebar === "function") toggleSidebar();
  };

  const openLoginModal = () => {
    navigate('/login', { state: { backgroundLocation: location } });
    if (typeof toggleSidebar === "function") toggleSidebar();
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    navigate('/signup', { state: { backgroundLocation: location } });
    if (typeof toggleSidebar === "function") toggleSidebar();
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`} aria-hidden={!open}>
      <div className="sidebar-header">
        <h2>Navigation</h2>
      </div>

      <nav className="sidebar-main-nav">
        <ul>
          {mainNav.map((link) => (
            <li key={link.path}>
              <button
                className="sidebar-link btn-link"
                onClick={() => handleNavigate(link.path)}
                aria-label={`Go to ${link.name}`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider" />

      <nav>
        <h3 className="sidebar-section">Admin</h3>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
                onClick={() => { if (typeof toggleSidebar === 'function') toggleSidebar(); }}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-auth">
        <Button className="login-btn" onClick={openLoginModal}>Login</Button>
        <Button className="signup-btn" onClick={openSignupModal}>Sign Up</Button>
      </div>

      {/* Auth Modals */}
      <Modal isOpen={loginModalOpen} onClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>

      <Modal isOpen={signupModalOpen} onClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} />
      </Modal>
    </aside>
  );
}