// src/Package.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Package.css';
import Footer from '../Footer';
import logo from '../NewHome/Images/Logo (1).png';
import userService from '../Service/AxiosService'; // Import the updated userService module

const Package = () => {
  const nav = useNavigate();
  
  const [packageMode, setPackageMode] = useState('Premium');
  const [filter, setFilter] = useState('all');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [menuItems, setMenuItems] = useState([]);
  const [packagePrice, setPackagePrice] = useState(0);

  // Define package prices
  const packagePrices = {
    Premium: 5999,
    Standard: 4999,
    Health: 4999,
    Student: 3500,
  };

  // Fetch menu items from API using userService
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await userService.fetchPackages(packageMode); // Use userService to fetch packages
        setMenuItems(data);
        setPackagePrice(packagePrices[packageMode]); // Set price based on selected package
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, [packageMode]);

  // Calculate total price based on selected package and quantity
  useEffect(() => {
    setTotalPrice(packagePrice * quantity);
  }, [quantity, packagePrice]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleMenu = () => {
    nav('/Order', { state: { menuItemName: `${packageMode} Package`, price: totalPrice } });
  };

  const filteredItems = menuItems.filter(item => {
    switch (filter) {
      case 'all':
        return true;
      case 'veg':
        return item.veg;
      case 'non-veg':
        return !item.veg;
      case 'rating':
        return item.rating >= 4.5;
      default:
        return false;
    }
  });

  return (
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
      <div className="menu-page2">
        <div className="main2">
          <h1 style={{ textAlign: 'center' ,color:'#FF7518'}}>Packages</h1>
          <div className="package-selector2">
            <button onClick={() => setPackageMode('Premium')} className={packageMode === 'Premium' ? 'active' : ''}>Premium Package</button>
            <button onClick={() => setPackageMode('Standard')} className={packageMode === 'Standard' ? 'active' : ''}>Standard Package</button>
            <button onClick={() => setPackageMode('Student')} className={packageMode === 'Student' ? 'active' : ''}>Student Package</button>
            <button onClick={() => setPackageMode('Health')} className={packageMode === 'Health' ? 'active' : ''}>Health Package</button>
          </div>
          <div className="filter-selector2">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('veg')} className={filter === 'veg' ? 'active' : ''}>Veg</button>
            <button onClick={() => setFilter('non-veg')} className={filter === 'non-veg' ? 'active' : ''}>Non-Veg</button>
            <button onClick={() => setFilter('rating')} className={filter === 'rating' ? 'active' : ''}>Rating > 4.5</button>
          </div>
          <div className="menu-items2">
            {filteredItems.map(item => (
              <div key={item.id} className="menu-item2">
                <Link to={`/menu/${item.id}`}>
                  <div className="menu-item-image-container">
                    <img src={item.image} alt={item.name} className="menu-item-image2" />
                  </div>
                  <div className="menu-item-name">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="menu-item-description">
                    <p>{item.description}</p>
                  </div><br/>
                  <div className="menu-item-reviews">
                    <p>Reviews: {item.reviews}</p>
                  </div>
                  <div className="menu-item-rating">
                    <p>Rating: {item.rating}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="quantity-selector">
          <h3>
            <label htmlFor="quantity">Quantity:</label></h3>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <div className="total-price">
            <h2>Total Price: RS.{totalPrice}</h2>
          </div>
          <button onClick={handleMenu} className="btn2">Order Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Package;
