import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth(); // Ambil fungsi logout dari context

  const handleLogout = () => {
    logout(); // Panggil fungsi logout ketika link diklik
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      
      {/* Link ke User Profile */}
      <Link to="/user-profile">Go to User Profile</Link> | 
      
      {/* Link Logout */}
      <Link to="/" onClick={handleLogout}> Logout</Link> {/* Logout akan mengarahkan ke homepage */}
    </div>
  );
};

export default Dashboard;
