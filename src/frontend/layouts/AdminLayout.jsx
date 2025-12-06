import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Header, Sidebar, Footer } from "../components/layout/layout";
import Button from "../components/ui/Button";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="wrapper">
      <Header toggleSidebar={toggle} isOpen={isOpen} />
      <div className="main-content">
        <Sidebar open={isOpen} toggleSidebar={toggle} />
        <div className="container">
          <div style={{ 
            padding: '20px', 
            background: '#f5f5f5', 
            marginBottom: '20px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ margin: 0 }}>Admin Panel</h2>
              {user && <p style={{ margin: '5px 0 0 0', color: '#6C5B7B' }}>Welcome, {user.name || user.email}</p>}
            </div>
            <Button 
              onClick={handleLogout}
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              Logout
            </Button>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
