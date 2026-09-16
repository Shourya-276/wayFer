import React, { useState, useEffect } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';
import { api } from '../../services/api';

interface AdminPageProps {
  onBackToSite: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToSite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(api.isAdminAuthenticated());
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    api.logoutAdmin();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} onBackToSite={onBackToSite} />;
  }

  return <AdminDashboard onLogout={handleLogout} onBackToSite={onBackToSite} />;
};
