







import React, { useState } from 'react';
import { menus } from './Menu';
import './Services.css';

const Services = () => {
  const [selectedEvent, setSelectedEvent] = useState('breakfast');

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  return (
    <div>
    <div>
    <header className="header4">
        <div className="logo4">
          <h2>PrimePlates</h2>
        </div>
        <nav className="navigation4">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Packages">Packages</a></li>
            <li><a href="/CustomOrder">Custom Order</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      </header>
    </div>
    <div className="menu-page4">
      <h1>Services</h1>
      <div className="event-selector4">
        <label>Select Event Type: </label>
        <select value={selectedEvent} onChange={handleEventChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          
        </select>
      </div>
      <div className="menu-list4">
        {menus[selectedEvent].map((menu) => (
          <div key={menu.id} className="menu-item4">
          <img src={menu.image} alt={menu.name} className="menu-item-image4" />
            <h3>{menu.name}</h3>
            <p>{menu.description}</p>
            <p>{menu.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
