import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Header = () => {
  return (
    <header>
      <h1>Personal Finance Manager</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;