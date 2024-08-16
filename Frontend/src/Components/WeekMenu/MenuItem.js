import React, { useState } from 'react';
import './MenuItem.css';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleCountChange = (e) => {
    const value = Number(e.target.value);
    setCount(value > 0 ? value : 1);
  };

  const handleOrder = () => {
    const totalPrice = (item.price * count).toFixed(2);
    navigate("/Order", {
      state: {
        menuItemName: item.description,
        price: totalPrice
      }
    });
  };

  const price = Number(item.price);
  const totalPrice = (price * count).toFixed(2);

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.description} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-title">{item.type}</h3>
        <p className="menu-item-price">Price: Rs.{price.toFixed(2)}</p>
        <p className="menu-item-description">{item.description}</p>
        <button onClick={handleToggleDetails} style={{backgroundColor:'#ff5722', border:'none',color:'white'}}>
          {showDetails ? 'Hide Details' : 'Place Order'}
        </button>
        {showDetails && (
          <div className="menu-item-extra-details">
            <div>
              <label htmlFor="count">Count:</label>
              <input
                type="number"
                id="count"
                value={count}
                onChange={handleCountChange}
                min="1"
                step="1"
              />
            </div>
            <p className="menu-item-total-price">
              Total Price: Rs.{totalPrice}
            </p>
            <button onClick={handleOrder} className="order-now-btn">
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
