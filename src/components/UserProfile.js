import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'; // Import Link

const UserProfile = () => {
  const { currentUser } = useAuth(); // Ambil data pengguna dari context
  
  // Jika currentUser tidak ada, tampilkan pesan
  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {currentUser.username}</p>
      <p><strong>Password:</strong> {currentUser.password}</p>
      <p><strong>Description:</strong> {currentUser.description}</p>
      
      {/* Link kembali ke Dashboard */}
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default UserProfile;
