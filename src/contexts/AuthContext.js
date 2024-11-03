import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setCurrentUser({ username: 'admin', password: 'admin', description: 'Administrator' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null); // Reset currentUser saat logout
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
