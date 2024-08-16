// src/components/WhyChooseUs.js
import React from 'react';
import './Benefits.css'; // Import the CSS file for styling
import img1 from '../Home/HomeImages/home1.jpeg'
import img from '../NewHome/Images/quality.jpg'
const Benefits = () => {
  return (
    <div className="why-choose-us">
    <div className="headline">
      <h2 style={{color:'#FF7518'}}>BENEFITS FOR</h2>
      </div>
      <div className="features">
        <div className="feature">
          <img src="https://logowik.com/content/uploads/images/circle-mother-and-baby3232.logowik.com.webp" alt="Personalized Plan" />
          <h3>Women With Toddler</h3>
          <p>The food is 100% healthy to feed kids as well.</p>
        </div>
        
       
        <div className="feature">
          <img src="https://www.pngitem.com/pimgs/m/420-4201346_international-day-for-elderly-persons-hd-png-download.png" alt="Add-ons Facility" />
          <h3>Elderly</h3>
          <p>Elderly or sick people for whom it’s too much of a chore to cook.</p>
        </div>
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mMWZqETJdxY9T9NR-zuSIFxe7niiCGr33qXl0hotYvLQnf-2QJOPIUD9kSEAK83okfU&usqp=CAU" />
          <h3>Bachelors</h3>
          <p>Home food at your budget.</p>
        </div>
        <div className="feature">
        <img src="https://msatechnosoft.in/images/plan.png" alt="Personalized Plan" />
        <h3>Working Professionals  </h3>
        <p>Don't have to dine out.
        We deliver appetizing and healthy dishes.</p>
      </div>
      </div>
    </div>
  );
}

export default Benefits;
