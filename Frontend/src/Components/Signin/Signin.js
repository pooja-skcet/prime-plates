import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import img from './Image/signin_image.jpg'; // Ensure this image exists or adjust path
import Link from '@mui/material/Link';
import userService from '../Service/AxiosService'; // Import the userService module

function Signin() {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignup = () => {
        nav("/Signup");
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await userService.fetchUsers(); // Use the userService to fetch users
            const user = response.find((user) => user.username === username);
            if (user) {
                if (user.password === password) {
                    setError('');
                    setSuccess(true);
                    setTimeout(() => {
                        nav('/Home'); // Redirect to the Home page after 5 seconds
                    }, 5000); // 5 seconds delay
                } else {
                    setError('Invalid username or password');
                    setSuccess(false);
                }
            } else {
                setSuccess(false);
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('An error occurred while logging in. Please try again later.');
            setSuccess(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-box">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p>Welcome to PrimePlates! Sign up to elevate your daily meals with delicious homemade recipes and seamless food delivery solutions!</p>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="form-options">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#forgot-password">Forgot Password?</a>
                        </div>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">Login successful! Redirecting...</p>} {/* Success message */}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                   
                    <Link href="/Signup" variant="body2" onClick={handleSignup}>
                        Don't have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
