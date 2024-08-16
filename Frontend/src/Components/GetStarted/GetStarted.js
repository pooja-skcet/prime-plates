import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css'; // Make sure to create a CSS file for styling if needed

const GetStarted = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/Signin'); // Replace with the actual path for user login
  };

  const handleAdminLogin = () => {
    navigate('/AdminLogin'); // Replace with the actual path for admin login
  };

  return (
    <div className="get-started-container0">
      <h1>Welcome to PrimePlates</h1>
      <div className="buttons-container0">
        <button onClick={handleUserLogin} className="login-button user-login-button0">User Login</button>
        <button onClick={handleAdminLogin} className="login-button admin-login-button0">Admin Login</button>
      </div>
    </div>
  );
};

export default GetStarted;
