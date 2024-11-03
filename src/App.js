import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile'; // Import UserProfile

import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Render navbar hanya di rute yang bukan dashboard */}
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Home />
              </>
            } 
          />
          <Route 
            path="/about" 
            element={
              <>
                <Navbar />
                <About />
              </>
            } 
          />
          <Route 
            path="/service" 
            element={
              <>
                <Navbar />
                <Service />
              </>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <>
                <Navbar />
                <Blog />
              </>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <>
                <Navbar />
                <Contact />
              </>
            } 
          />
          <Route path="/login" element={<Login />} /> {/* Halaman login */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Halaman Dashboard tanpa navbar */}
          <Route path="/user-profile" element={<UserProfile />} /> {/* Rute baru untuk User Profile */}

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
