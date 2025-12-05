import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/App.css';
import '../../styles/layouts/Sidebar.css';

export default function Sidebar({ open = true, toggleSidebar }) {
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

  const openSignupModal = () => {
    navigate('/signup', { state: { backgroundLocation: location } });
    if (typeof toggleSidebar === "function") toggleSidebar();
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
        <button className="login-btn" onClick={openLoginModal}>Login</button>
        <button className="signup-btn" onClick={openSignupModal}>Sign Up</button>
      </div>
    </aside>
  );
}
