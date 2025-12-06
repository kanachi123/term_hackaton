import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import useModal from '../../hooks/useModal';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const { openModal } = useModal();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    // Store the attempted location to redirect after login
    openModal('/login');
    return <Navigate to="/" replace />;
  }

  // If admin required but user is not admin
  if (requireAdmin && !isAdmin) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1>Access Denied</h1>
        <p>You need administrator privileges to access this page.</p>
      </div>
    );
  }

  return children;
}

