import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedAdmin = localStorage.getItem('isAdmin');

    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
      setIsAdmin(savedAdmin === 'true');
    }
  }, []);

  const login = (userData) => {
    const userInfo = {
      email: userData.email,
      name: userData.name || userData.email,
      role: userData.role || 'user'
    };

    setUser(userInfo);
    setIsAuthenticated(true);
    setIsAdmin(userInfo.role === 'admin');

    localStorage.setItem('user', JSON.stringify(userInfo));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('isAdmin', userInfo.role === 'admin' ? 'true' : 'false');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);

    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

