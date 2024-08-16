import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import birthdayImage from './HomeImages/BirthdayImage.avif';
import marriageImg from './HomeImages/WeddingImage.avif';
import corporateImg from './HomeImages/CorporateParty.webp';

import buffet from './HomeImages/buffet.avif';
import box from './HomeImages/BoxPackedImage.avif';



const Homepage = () => {
  const nav=useNavigate();

  
  const handleLogin = () =>{
    nav("/Signin")
  }
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <h2>PrimePlates</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Packages</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/custom_package">Custom Package</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
           
          </ul>
        </nav>
        <div className="header-button">
        <button className="btn" style={{outline:"none"}} onClick={handleLogin}>Get Started</button>
        </div>
      </header>

      <section className="hero">
       
        <h1>LET US HANDLE YOUR NEXT EVENT</h1>
        <h3>
        Perfect Plates for Perfect Parties
        </h3>
        <div className="cta-buttons">
          <a href="/catering-options" className="btn">View Catering Options</a>
          <a href="/gallery" className="btn">View Gallery</a>
          
        </div>
      </section>

      
      <div className="catering-section">
          <h2>Catering Services</h2>
          <div className="catering-options">
            <div className="catering-option">
              <img src={birthdayImage} alt="Fresh Salads" />
              <p>Birthday Events</p>
            </div>
            <div className="catering-option">
              <img src={corporateImg} alt="Party Platters" />
              <p>Corporate Events</p>
            </div>
            <div className="catering-option">
              <img src={marriageImg} alt="Sea Food" />
              <p>Marriage Events</p>
            </div>
            
          </div>
          <button className="view-more-button">view more</button>
        </div>
        <div className="package-section">
          <h2>Catering Packages</h2>
         
          <div className="package-options">
            <div className="package-option">
              <img src={buffet} alt="Fresh Salads" />
              <p>Buffet Package</p>
            </div>
            <div className="package-option">
              <img src={box} alt="Party Platters" />
              <p>Box Package</p>
            </div>
            
            
          </div>
          <button className="view-more-button">view more</button>
        </div>
      
      <footer className="footer">
      <div className="footer-content">
        <p>We're ready when you are </p>
        <a href="#contact" className="footer-contact-button">Contact Us</a>
      </div>
    </footer>
    </div>
  );
}

export default Homepage;