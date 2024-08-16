import React, { useState, useEffect } from 'react';
import './CustomOrder.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import MealSelection from './MealSelection';
import logo from '../NewHome/Images/Logo (1).png';
import userService from '../Service/AxiosService'
const CustomOrder = () => {
  const nav = useNavigate();

  const [order, setOrder] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    breakfastType: '',
    lunchType: '',
    dinnerType: '',
    orderCount: 1,
    username: '',
    address: '',
    date: '',
    time: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const prices = {
    breakfast: {
      Idli: 50,
      Dosa: 60,
      Poha: 40,
      'Egg Sandwich': 70,
      'Chicken Sausage': 80,
      Bacon: 90
    },
    lunch: {
      Paneer: 150,
      Dal: 100,
      'Vegetable Biryani': 200,
      'Chicken Curry': 250,
      'Mutton Biryani': 300,
      'Fish Fry': 220
    },
    dinner: {
      Roti: 20,
      Sabji: 70,
      'Vegetable Pulao': 120,
      'Chicken Roti': 80,
      'Mutton Sabji': 250,
      'Fish Pulao': 180
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!order.breakfast) newErrors.breakfast = "Breakfast is required";
    if (!order.lunch) newErrors.lunch = "Lunch is required";
    if (!order.dinner) newErrors.dinner = "Dinner is required";
    if (!order.breakfastType) newErrors.breakfastType = "Please select Veg/Non-Veg for breakfast";
    if (!order.lunchType) newErrors.lunchType = "Please select Veg/Non-Veg for lunch";
    if (!order.dinnerType) newErrors.dinnerType = "Please select Veg/Non-Veg for dinner";
    if (!order.username) newErrors.username = "Username is required";

    if (!order.address) newErrors.address = "Address is required";
    if (!order.date) newErrors.date = "Date is required";
    if (!order.time) newErrors.time = "Time is required";
    if (!order.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await userService.placeCustomOrder(order);
        setShowSuccess(true);
        // Clear form or redirect user as needed
        setOrder({
          breakfast: '',
          lunch: '',
          dinner: '',
          breakfastType: '',
          lunchType: '',
          dinnerType: '',
          orderCount: 1,
          username: '',
          address: '',
          date: '',
          time: '',
          city: ''
        });
      } catch (error) {
        setShowSuccess(false);
        console.error('Error placing order:', error);
      }
    }
  };

  {showSuccessPopup && (
    <div className="success-popup">
      <img src="path/to/green-tick-image.png" alt="Success" />
      <p>Order placed successfully and delivery to the address at correct time</p>
      <button onClick={() => setShowSuccessPopup(false)}>Close</button>
    </div>
  )}
  const getItems = (meal, type) => {
    if (type === 'veg') {
      return vegItems[meal];
    } else if (type === 'nonVeg') {
      return nonVegItems[meal];
    }
    return [];
  };

  const calculateTotalPrice = () => {
    const breakfastPrice = prices.breakfast[order.breakfast] || 0;
    const lunchPrice = prices.lunch[order.lunch] || 0;
    const dinnerPrice = prices.dinner[order.dinner] || 0;
    const pricePerItem = breakfastPrice + lunchPrice + dinnerPrice;
    const total = pricePerItem * order.orderCount;
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [order.breakfast, order.lunch, order.dinner, order.orderCount]);

  const vegItems = {
    breakfast: ['Idli', 'Dosa', 'Poha'],
    lunch: ['Paneer', 'Dal', 'Vegetable Biryani'],
    dinner: ['Roti', 'Sabji', 'Vegetable Pulao']
  };

  const nonVegItems = {
    breakfast: ['Egg Sandwich', 'Chicken Sausage', 'Bacon'],
    lunch: ['Chicken Curry', 'Mutton Biryani', 'Fish Fry'],
    dinner: ['Chicken Roti', 'Mutton Sabji', 'Fish Pulao']
  };

  return (
    <div>
      <header className="header2">
        <img src={logo} alt="primeplates" />
        <nav className="navigation2">
          <a href="/Home">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/WeekMenu">Our Menu</a>
          <a href="/Package">Packages</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
      
      <div className="custom-order-container">
        <div className="cont1">
          <div className="custom-order-page01">
            <h2 style={{color:'#FF7518'}}>Craft Your Perfect Meal—Your Taste, Your Way!</h2>
            
            {/* Breakfast selection */}
            <div className="selection-card">
              <h3>Choose Your Breakfast Type</h3>
              <div className="options">
                <button
                  className={`option-btn ${order.breakfastType === 'veg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, breakfastType: 'veg' })}
                >
                  Veg
                </button>
                <button
                  className={`option-btn ${order.breakfastType === 'nonVeg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, breakfastType: 'nonVeg' })}
                >
                  Non-Veg
                </button>
              </div>
              {errors.breakfastType && <span className="error01">{errors.breakfastType}</span>}
            </div>

            <MealSelection meal="Breakfast" items={getItems('breakfast', order.breakfastType)} selected={order.breakfast} onSelect={(item) => setOrder({ ...order, breakfast: item })} error={errors.breakfast} />
            
            {/* Lunch selection */}
            <div className="selection-card">
              <h3>Choose Your Lunch Type</h3>
              <div className="options">
                <button
                  className={`option-btn ${order.lunchType === 'veg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, lunchType: 'veg' })}
                >
                  Veg
                </button>
                <button
                  className={`option-btn ${order.lunchType === 'nonVeg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, lunchType: 'nonVeg' })}
                >
                  Non-Veg
                </button>
              </div>
              {errors.lunchType && <span className="error01">{errors.lunchType}</span>}
            </div>

            <MealSelection meal="Lunch" items={getItems('lunch', order.lunchType)} selected={order.lunch} onSelect={(item) => setOrder({ ...order, lunch: item })} error={errors.lunch} />
            
            {/* Dinner selection */}
            <div className="selection-card">
              <h3>Choose Your Dinner Type</h3>
              <div className="options">
                <button
                  className={`option-btn ${order.dinnerType === 'veg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, dinnerType: 'veg' })}
                >
                  Veg
                </button>
                <button
                  className={`option-btn ${order.dinnerType === 'nonVeg' ? 'selected' : ''}`}
                  onClick={() => setOrder({ ...order, dinnerType: 'nonVeg' })}
                >
                  Non-Veg
                </button>
              </div>
              {errors.dinnerType && <span className="error01">{errors.dinnerType}</span>}
            </div>

            <MealSelection meal="Dinner" items={getItems('dinner', order.dinnerType)} selected={order.dinner} onSelect={(item) => setOrder({ ...order, dinner: item })} error={errors.dinner} />

            <div className="selection-card">
              <h3>Order Count</h3>
              <input
                type="number"
                name="orderCount"
                value={order.orderCount}
                onChange={handleChange}
                min="1"
              />
            </div>
            <div className="selection-card">
              <h3>Total Price</h3>
              <input
                type="text"
                value={`₹${totalPrice}`}
                readOnly
              />
            </div>

            <div className="selection-card">
            <h3>Username</h3>
            <input
              type="text"
              name="username"
              value={order.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.username && <span className="error01">{errors.username}</span>}
          </div>

            <div className="selection-card">
              <h3>Address</h3>
              <input
                type="text"
                name="address"
                value={order.address}
                onChange={handleChange}
                placeholder="Enter your delivery address"
              />
              {errors.address && <span className="error01">{errors.address}</span>}
            </div>
            <div className="selection-card">
              <h3>Date</h3>
              <input
                type="date"
                name="date"
                value={order.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error01">{errors.date}</span>}
            </div>
            <div className="selection-card">
              <h3>Time</h3>
              <input
                type="time"
                name="time"
                value={order.time}
                onChange={handleChange}
              />
              {errors.time && <span className="error01">{errors.time}</span>}
            </div>
            <div className="selection-card">
              <h3>City</h3>
              <input
                type="text"
                name="city"
                value={order.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
              {errors.city && <span className="error01">{errors.city}</span>}
            </div>

            <button onClick={handleSubmit} className="bt01">Place Order</button>
            {showSuccess && (
              <div className="success-alert">
                Order placed successfully and delivery to the address at correct time
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomOrder;
