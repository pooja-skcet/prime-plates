import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminId === '' || password === '') {
      setError('Administrator ID and Password are required.');
    } else {
      // Add your authentication logic here
      if (adminId === 'admin' && password === 'admin123') {
        navigate('/Admin'); // Replace with your admin dashboard route
      } else {
        setError('Invalid Administrator ID or Password.');
      }
    }
  };

  return (
    <div className="admin-login-container9">
      <div className="admin-login-box9">
        <h2>Administrator Login</h2>
        {error && <p className="error-message9">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group9">
            <label htmlFor="adminId">Administrator ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              required
            />
          </div>
          <div className="form-group9">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button9">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
