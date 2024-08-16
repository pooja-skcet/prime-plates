import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './WeekMenu.css';
import Footer from '../Footer';
import logo from '../NewHome/Images/Logo (1).png'

const WeekMenu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState('Monday');
  const [selectedSession, setSelectedSession] = useState('Lunch');
  const [selectedPortion, setSelectedPortion] = useState('Premium');
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters

  const toggleVegOnly = () => {
    setVegOnly(!vegOnly);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const menuItems = [
    // Your menuItems array as defined earlier
    {
      day:'Monday',
      type: 'Premium',
      price: '170.00',
      description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.freepik.com/premium-photo/chapathi-with-vegetable-curry_931559-308.jpg'
    },
    {
      day:'Monday',
      type: 'Standard',
      price: '250.00',
      description: 'Butter Naan, Paneer Butter Masala, Dal Makhani, Gulab Jamun',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Monday',
      type: 'Health',
      price: '180.00',
      description: 'Multi-grain Roti, Sprout Salad, Tofu Curry, Fresh Fruits',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Monday',
      type: 'Premium',
      price: '400.00',
      description: 'Stuffed Paratha, Paneer Lababdar, Dal Tadka, Kesar Pista Kulfi',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Monday',
      type: 'Student',
      price: '120.00',
      description: 'Chapati, Mixed Vegetable Curry, Rice, Pickle',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Monday',
      type: 'Standard',
      price: '180.00',
      description: 'Chicken Biryani, Raita, Salad',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
  
  
    {
      day:'Tuseday',
      type: 'Standard',
      price: '150.00',
      description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Tuseday',
      type: 'Standard',
      price: '220.00',
      description: 'Masala Dosa, Coconut Chutney, Sambar, Filter Coffee',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Tuseday',
      type: 'Health',
      price: '200.00',
      description: 'Oats Idli, Tomato Chutney, Steamed Veggies, Herbal Tea',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Tuseday',
      type: 'Premium',
      price: '450.00',
      description: 'Hyderabadi Biryani, Mirchi Ka Salan, Sheer Khurma',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Tuseday',
      type: 'Student',
      price: '130.00',
      description: 'Rice, Rasam, Papad, Curd',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Tuseday',
      type: 'Standard',
      price: '170.00',
      description: 'Chicken Kebab, Mint Chutney, Salad',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
 
    {
      day:'Wednesday',
      type: 'Student',
      price: '160.00',
      description: 'Roti, Dal Tadka, Jeera Aloo, Salad',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Wednesday',
      type: 'Standard',
      price: '240.00',
      description: 'Puri, Chana Masala, Rice Kheer, Pickle',
      cuisine: 'North Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Wednesday',
      type: 'Health',
      price: '190.00',
      description: 'Quinoa Upma, Cucumber Raita, Fruit Bowl',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Wednesday',
      type: 'Premium',
      price: '420.00',
      description: 'Palak Paneer, Laccha Paratha, Shahi Tukda',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Wednesday',
      type: 'Student',
      price: '140.00',
      description: 'Upma, Coconut Chutney, Banana',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Wednesday',
      type: 'Standard',
      price: '185.00',
      description: 'Mutton Rogan Josh, Butter Naan, Salad',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
 
    {
      day:'Thursday',
      type: 'Premium',
      price: '170.00',
      description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Thursday',
      type: 'Standard',
      price: '250.00',
      description: 'Butter Naan, Paneer Butter Masala, Dal Makhani, Gulab Jamun',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Thursday',
      type: 'Health',
      price: '180.00',
      description: 'Multi-grain Roti, Sprout Salad, Tofu Curry, Fresh Fruits',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Thursday',
      type: 'Premium',
      price: '400.00',
      description: 'Stuffed Paratha, Paneer Lababdar, Dal Tadka, Kesar Pista Kulfi',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Thursday',
      type: 'Student',
      price: '120.00',
      description: 'Chapati, Mixed Vegetable Curry, Rice, Pickle',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Thursday',
      type: 'Standard',
      price: '180.00',
      description: 'Chicken Biryani, Raita, Salad',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
 
    {
      day:'Friday',
      type: 'Health',
      price: '160.00',
      description: 'Aloo Paratha, Curd, Mango Chutney',
      cuisine: 'North Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Friday',
      type: 'Standard',
      price: '230.00',
      description: 'Chole Bhature, Cucumber Raita, Fruit Custard',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Friday',
      type: 'Health',
      price: '190.00',
      description: 'Vegetable Poha, Green Tea, Mixed Fruits',
      cuisine: 'North Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Friday',
      type: 'Premium',
      price: '420.00',
      description: 'Mutton Biryani, Raita, Kachori',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Friday',
      type: 'Student',
      price: '130.00',
      description: 'Vegetable Pulao, Curd, Salad',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Friday',
      type: 'Premium',
      price: '180.00',
      description: 'Chicken Korma, Paratha, Cucumber Raita',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
  
    {
      day:'Saturday',
      type: 'Health',
      price: '170.00',
      description: 'Vegetable Upma, Coconut Chutney',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Saturday',
      type: 'Standard',
      price: '240.00',
      description: 'Idli Sambar, Coconut Chutney, Filter Coffee',
      cuisine: 'South Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Saturday',
      type: 'Health',
      price: '200.00',
      description: 'Oats Porridge, Fresh Fruit Salad, Herbal Tea',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Saturday',
      type: 'Premium',
      price: '430.00',
      description: 'Lamb Rogan Josh, Steamed Rice, Rajma, Shahi Tukda',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Saturday',
      type: 'Student',
      price: '140.00',
      description: 'Dal Khichdi, Pickle, Salad',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Saturday',
      type: 'Standard',
      price: '190.00',
      description: 'Chicken Tikka, Naan, Green Salad',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
  
    {
      day:'Sunday',
      type: 'Student',
      price: '180.00',
      description: 'Vegetable Sandwich, Fresh Juice',
      cuisine: 'North Indian',
      session: 'Breakfast',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Sunday',
      type: 'Standard',
      price: '260.00',
      description: 'Paneer Tikka, Naan, Dal Fry, Gajar Ka Halwa',
      cuisine: 'North Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Sunday',
      type: 'Health',
      price: '210.00',
      description: 'Vegetable Salad, Quinoa Pilaf, Herbal Tea',
      cuisine: 'South Indian',
      session: 'Dinner',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Sunday',
      type: 'Premium',
      price: '440.00',
      description: 'Tandoori Chicken, Mutton Korma, Jeera Rice, Ras Malai',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Sunday',
      type: 'Student',
      price: '150.00',
      description: 'Vegetable Curry, Chapati, Rice, Yogurt',
      cuisine: 'South Indian',
      session: 'Lunch',
      veg: true,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
    {
      day:'Sunday',
      type: 'Premium',
      price: '190.00',
      description: 'Mutton Seekh Kebabs, Green Salad, Raita',
      cuisine: 'North Indian',
      session: 'Dinner',
      veg: false,
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2022/01/Famous-Food-Of-South-India1.jpg'
    },
  ];

  const filteredItems = menuItems.filter(item => 
    item.day === selectedDayOfWeek &&
    (!vegOnly || item.veg) &&
    item.session === selectedSession &&
    item.type === selectedPortion
  );

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      <header className="header2">
        <img src={logo} alt="primeplates"/>
        <nav className="navigation2">
          <a href="/Home">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          <a href="/CustomOrder">Custom Order</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>

      <div className="menu-page5">
        <div className="section5">
        
          <div className="filters5">
          <h1 style={{color:'#FF7518'}}>Feast of the Week: Daily Delights for Breakfast, Lunch, & Dinner!</h1>
            <button className="filter-button5" onClick={toggleFilters}>
              {showFilters ? 'Hide Filters' : 'Filter By'}
            </button>

            {showFilters && (
              <div className="filter-options5">
                <div className="meal-sessions5">
                  <button
                    className={selectedSession === 'Breakfast' ? 'active' : ''}
                    onClick={() => setSelectedSession('Breakfast')}
                  >
                    Breakfast
                  </button>
                  <button
                    className={selectedSession === 'Lunch' ? 'active' : ''}
                    onClick={() => setSelectedSession('Lunch')}
                  >
                    Lunch
                  </button>
                  <button
                    className={selectedSession === 'Dinner' ? 'active' : ''}
                    onClick={() => setSelectedSession('Dinner')}
                  >
                    Dinner
                  </button>
                </div>

                <div className="portion-sizes5">
                  <button
                    className={selectedPortion === 'Premium' ? 'active' : ''}
                    onClick={() => setSelectedPortion('Premium')}
                  >
                    Premium
                  </button>
                  <button
                    className={selectedPortion === 'Standard' ? 'active' : ''}
                    onClick={() => setSelectedPortion('Standard')}
                  >
                    Standard
                  </button>
                  <button
                    className={selectedPortion === 'Student' ? 'active' : ''}
                    onClick={() => setSelectedPortion('Student')}
                  >
                    Student
                  </button>
                  <button
                    className={selectedPortion === 'Health' ? 'active' : ''}
                    onClick={() => setSelectedPortion('Health')}
                  >
                    Health
                  </button>
                </div>

                <div className="veg-toggle5">
                  <label htmlFor="veg-only5">Veg</label>
                  <input
                    type="checkbox"
                    id="veg-only5"
                    checked={vegOnly}
                    onChange={toggleVegOnly}
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="week-menu5">
            <div className="week-days5">
              <button>&lt;</button>
              <div className="days5">
                {daysOfWeek.map(day => (
                  <button
                    key={day}
                    className={selectedDayOfWeek === day ? 'active' : ''}
                    onClick={() => setSelectedDayOfWeek(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <button>&gt;</button>
            </div>

            <div className="menu-items5">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))
              ) : (
                <p>No items available for the selected filters.</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WeekMenu;



