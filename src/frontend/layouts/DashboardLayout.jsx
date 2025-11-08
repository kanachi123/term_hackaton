// frontend/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Footer } from "../components/layout/layout";
import { useState } from "react";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="wrapper">
      <Header toggleSidebar={toggle} />
      <div className="main-content">
        {isOpen && <Sidebar />}
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}