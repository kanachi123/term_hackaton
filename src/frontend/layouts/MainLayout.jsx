// frontend/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import { Header, Sidebar, Footer } from "../components/layout/layout";
import { useState } from "react";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="wrapper">
      <Header toggleSidebar={toggle} isOpen={isOpen} />
      <div className="main-content">
        <Sidebar open={isOpen} toggleSidebar={toggle} />
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}