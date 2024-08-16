import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import birthdayImage from './HomeImages/BirthdayImage.avif';
import marriageImg from './HomeImages/WeddingImage.avif';
import corporateImg from './HomeImages/CorporateParty.webp';

import buffet from './HomeImages/buffet.avif';
import box from './HomeImages/BoxPackedImage.avif';



const Home = () => {
  const nav=useNavigate();

  
  const handleLogin = () =>{
    nav("/Signin")
  }
  const handleServices = () =>{
    nav("/Services")
  }
  const handlePackage = () =>{
    nav("/Package")
  }
 
  return (
    <div className="homepage3">
    <div>
      <header className="header3">
        <div className="logo3">
          <h2>PrimePlates</h2>
        </div>
        <nav className="navigation3">
          <ul>
            <li><a href="/Package">Packages</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/CustomOrder">Custom Order</a></li>
            <li><a href="/contact">Contact</a></li>
           
           
          </ul>
        </nav>
        <div className="header-button3">
        <button className="btn3" style={{outline:"none"}} onClick={handleLogin}>Get Started</button>
        </div>
      </header>
      </div>
      <section className="hero3">
       
        <h1>LET US HANDLE YOUR NEXT EVENT</h1>
        <h3>
        Perfect Plates for Perfect Parties
        </h3>
        <div className="cta-buttons3">
          <a href="/Services" className="btn3">View Catering Options</a>
          <a href="/blog" className="btn3">View Gallery</a>
          
        </div>
      </section>

      
      <div className="catering-section3">
          <h2>Catering Services</h2>
          <div className="catering-options3">
            <div className="catering-option3">
              <img src={birthdayImage} alt="Fresh Salads" />
              <p>Birthday Events</p>
            </div>
            <div className="catering-option3">
              <img src={corporateImg} alt="Party Platters" />
              <p>Corporate Events</p>
            </div>
            <div className="catering-option3">
              <img src={marriageImg} alt="Sea Food" />
              <p>Marriage Events</p>
            </div>
            
          </div>
          <button className="view-more-button3" onClick={handleServices}>view more</button>
        </div>
        <div className="package-section3">
          <h2>Catering Packages</h2>
         
          <div className="package-options3">
            <div className="package-option3">
              <img src={buffet} alt="Fresh Salads" />
              <p>Buffet Package</p>
            </div>
            <div className="package-option3">
              <img src={box} alt="Party Platters" />
              <p>Box Package</p>
            </div>
            
            
          </div>
          <button className="view-more-button3" onClick={handlePackage}>view more</button>
        </div>
      
      <footer className="footer3">
      <div className="footer-content3">
        <p>We're ready when you are </p>
        <a href="#contact" className="footer-contact-button3">Contact Us</a>
      </div>
    </footer>
    </div>
  );
}

export default Home;
