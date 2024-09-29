import React from 'react';
import { Link } from 'react-router-dom';
import './navigationbar.css'; // Assuming you have a CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">My App</div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
