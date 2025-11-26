import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/index.css';
import '../../styles/App.css';

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Team", path: "/dashboard/team" },
    { name: "User Management", path: "/dashboard/user-management" },
    { name: "LeaderBoard", path: "/dashboard/leaderboard" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  isActive ? "sidebar-link active" : "sidebar-link"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
