import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/team">Team</Link>
          </li>
          <li>
            <Link to="/dashboard/user-management">User Management</Link>
          </li>
          <li>
            <Link to="/dashboard/leaderboard">LeaderBoard</Link>
          </li>
          </ul>
      </nav>
    </aside>
  );
}
