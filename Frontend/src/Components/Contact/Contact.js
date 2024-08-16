import React from 'react';
import './Contact.css';
import ReviewPage from '../Review/ReviewPage';
import logo from '../NewHome/Images/Logo (1).png'
const reviews = [
  { user: 'John Doe', rating: 5, comment: 'Excellent service and delicious food!' },
  { user: 'Jane Smith', rating: 4, comment: 'Great variety and quality. Highly recommended!' },
  { user: 'Alice Johnson', rating: 5, comment: 'Amazing experience. The food was top-notch!' },
];

const Contact = () => {
  return (
    <div>
    <header className="header2">
        <img src={logo} alt="primeplates"/>
        <nav className="navigation2">
          <a href="/Home">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
         
        </nav>
      </header>

    <div className="contact-page">
    
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <div className="contact-details">
        <div className="address-section">
          <h2>COME, SEE US</h2>
          <p>PrimePlates Food Mess</p>
          <p>123 Culinary Street</p>
          <p>Foodville, FV 56789</p>
          <h2>Contact Number</h2>
          <p>Phone: +91-1234567890</p>
        </div>
        <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="Mess Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.467226267483!2d144.96328031531582!3d-37.814563979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d22e1a1ecb0b!2s123%20Culinary%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1648212020616!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
        <div className="contact-section">
         <h2>Follow Us</h2>
         <h3>Stay connected with us on social media:</h3>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid" alt="Instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c36298b.jpg" alt="Facebook" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.pinimg.com/736x/c4/b2/c3/c4b2c30fe02de0e35f9460c9864fe333.jpg" alt="Twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrUQafl47on4AQww-kxMOSLYeribYrETyMuKQH3sEXHPWLYpwtuHMTmwXHc25yu1mjnU&usqp=CAU" alt="YouTube" />
                  YouTube
                </a>
              </li>
            </ul>
        </div>
       
      </div>

     <ReviewPage/>
    </div>
    </div>
  );
};

export default Contact;
