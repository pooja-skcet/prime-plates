// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footerr">
      <div className="footerrr-content">
        <div className="footer-logo">
          <h2 style={{color:'white'}}>PrimePlates</h2>
        </div>
        <div className="footerr-links">
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/catering">Corporate Catering</a></li>
          </ul>
        </div>
        <div className="footerr-contact">
          <p>We are available between 10AM - 10PM</p>
        </div>
        <div className="footerr-social">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://youtube.com">YouTube</a>
        </div>
      </div>
      <div className="footerr-bottom">
        <p>© 2021 - 2022 PrimePlates</p>
      </div>
    </footer>
  );
}

export default Footer;
