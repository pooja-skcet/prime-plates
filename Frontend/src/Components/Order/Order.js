import React, { useState } from 'react';
import './Order.css';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../NewHome/Images/Logo (1).png';
import userService from '../Service/AxiosService'; // Import the userService

const Order = () => {
    const location = useLocation();
    const nav = useNavigate(); // Use navigate hook
    const { state } = location;

    const [orderDetails, setOrderDetails] = useState({
        menuItemName: state?.menuItemName || '',
        price: state?.price || '',
        address: '',
        date: '',
        time: '',
        paymentMode: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({
            ...orderDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(orderDetails).every(field => field)) {
            try {
                await userService.placeOrder(orderDetails); // Call the placeOrder function
                nav('/success'); // Redirect to SuccessPage
            } catch (error) {
                alert('Failed to place order. Please try again later.');
                console.error('Error placing order:', error.message || error);
            }
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div>
        <div>
            <header className="header2">
                <img src={logo} alt="primeplates" />
                <nav className="navigation2">
                    <a href="/Home">Home</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/WeekMenu">Our Menu</a>
                    <a href="/CustomOrder">Custom Order</a>
                    <a href="/Contact">Contact</a>
                </nav>
            </header>
            </div>
            <div className="order-container">
                <div className="order-page11">
                    <h2>Place Your Order</h2>
                    <form onSubmit={handleSubmit} className="order-form11">
                        <div className="form-group11">
                            <label htmlFor="menuItemName" >Order Name:</label>
                            <input
                                type="text"
                                id="menuItemName"
                                name="menuItemName"
                                value={orderDetails.menuItemName}
                                onChange={handleChange}
                                required
                                style={{color:'black'}}
                            />
                        </div>
                        <div className="form-group11">
                            <label htmlFor="price">Price:</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={orderDetails.price}
                                onChange={handleChange}
                                required
                                style={{color:'black'}}
                            />
                        </div>
                        <div className="form-group11">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={orderDetails.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group11">
                            <label htmlFor="date">Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={orderDetails.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group11">
                            <label htmlFor="time">Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={orderDetails.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group11">
                            <label htmlFor="paymentMode">Payment Mode:</label>
                            <select
                                id="paymentMode"
                                name="paymentMode"
                                value={orderDetails.paymentMode}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Payment Mode</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="UPI">UPI</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                            </select>
                        </div>
                        <div className="form-group11">
                            <label htmlFor="contactNumber">Contact Number:</label>
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                value={orderDetails.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="payment-button11">Make Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
