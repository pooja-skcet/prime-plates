// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; // Import the CSS file for styling
import img1 from '../Home/HomeImages/home1.jpeg'
import img from '../NewHome/Images/quality.jpg'
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why <span>Choose Us</span></h2>
      <p>The best food for you at affordable prices</p>
      <div className="features">
        <div className="feature">
          <img src="https://www.foodsafesystem.com/wp-content/uploads/2020/07/Take-Away-2.gif" alt="Personalized Plan" />
          <h3>Personalized Plan</h3>
          <p>With our wide Menu and Affordable prices, you can personalize your order.</p>
        </div>
        
        <div className="feature">
          <img src="https://us.123rf.com/450wm/iftikharalam/iftikharalam2206/iftikharalam220600028/188188540-concetto-di-processo-di-sicurezza-alimentare-biologica-con-un-illustrazione-di-carattere-piatto.jpg?ver=6" alt="Hygienic and Safe Packaging" />
          <h3>Hygienic and Safe Packaging</h3>
          <p>Each food item will have proper packaging to secure the delicacy of the food.</p>
        </div>
        <div className="feature">
          <img src={img} alt="Add-ons Facility" />
          <h3>High-Quality Ingredients</h3>
          <p>We use only the freshest and highest quality ingredients to ensure that every dish is both delicious and nutritious.</p>
        </div>
        
      </div>
    </div>
  );
}

export default WhyChooseUs;
