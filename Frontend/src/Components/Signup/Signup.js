import React from 'react';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import userService from '../Service/AxiosService'; // Import userService
import './Signup.css';

function Signup() {
    const nav = useNavigate();

    const handleSignin = () => {
        nav("/Signin");
    };

    const handleHome = () => {
        nav("/Home");
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (name && username && email && password) {
            const user = { name, username, email, password };

            try {
                const response = await userService.signupUser(user); // Use the axios-based service
                console.log('Signup successful:', response);
                handleHome();
            } catch (error) {
                console.error('Signup failed:', error);
            }
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="signup-box">
                    <form className="signup-form" onSubmit={handleSignup}>
                        <h1>Create Account</h1>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="text" name="username" placeholder="UserName" required />
                        <input type="email" name="email" placeholder="Email or Mobile Number" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button type="submit" className="signup-button">Create Account</button>
                    </form>
                </div>
                <div className="info-box">
                    <h2>What you will get?</h2>
                    <ul>
                        <li>Delicious homemade meals delivered right to your doorstep. Enjoy a variety of dishes, personalized plans, and the convenience of our reliable service. We're thrilled to have you here!!</li>
                       
                        <li>At PrimePlates, we believe that good food brings people together. Our mission is to provide you with nutritious, tasty meals that make your life easier and more enjoyable.</li>
                    </ul>
                    <Link href="#" variant="body2" onClick={handleSignin}>
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
