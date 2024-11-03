import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth(); // Ambil currentUser dari context

  return (
    <Route
      {...rest}
      element={currentUser ? element : <Navigate to="/" />} // Arahkan ke login jika tidak ada currentUser
    />
  );
};

export default ProtectedRoute;
