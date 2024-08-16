import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MenuItemDetails.css';
import img1 from '../Package/PackageImages/hyderabadibriyani.jpg';
import { useNavigate } from 'react-router-dom';

  

const MenuItemDetails = () => {
  const nav=useNavigate();

  
  const handleOrder = () =>{
    nav("/Order")
  }
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [orderCount, setOrderCount] = useState(1);
  const basePrice = 150;

  useEffect(() => {
    // Fetch menu item details by ID
    const fetchMenuItemDetails = async () => {
      // Mock data for now, replace with API call
      const data = {
        id,
        name: 'Hydrabadi Biryani',
        description: 'Savor the rich and aromatic flavors of our Chicken Biryani, a timeless classic that brings together tender chicken pieces, fragrant basmati rice, and a blend of traditional spices. Each mouthful is an exquisite journey through layers of spices, herbs, and perfectly cooked rice, all infused with the essence of saffron and garnished with fresh herbs.',
        price: basePrice,
        ingredients: 'Basmati rice, Chicken (marinated in yogurt and spices), Saffron, Fresh herbs (coriander and mint), Traditional spices (cumin, coriander, garam masala, and more), Caramelized onions, Ghee',
        
        imageUrl: img1, // Add image URL
        reviews: [
          { user: 'John', rating: 5, comment: 'Absolutely delicious! The best Chicken Biryani we have ever had.' },
          { user: 'Jane', rating: 4, comment: 'Our go-to dish for family gatherings. Everyone loves it!' },
        ],
      };
      setItem(data);
    };

    fetchMenuItemDetails();
  }, [id]);

  const handleOrderCountChange = (event) => {
    setOrderCount(event.target.value);
  };

  const calculatePrice = () => {
    return (basePrice * orderCount).toFixed(2);
  };

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '⭐';
    }
    return stars;
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
    <header className="header1">
      <h2>PrimePlates</h2>
      <nav className="navigation1">
      <a href="/Home">Home</a>
      <a href="/AboutUs">About Us</a>
          <a href="/Package">Packages</a>
          
          <a href="/WeekMenu">Our Menu</a>
          <a href="/CustomOrder">Custom Order</a>
          <a href="/Contact">Contact</a>
      </nav>
    </header>
    </div>
      <div className="menu-item-details1">
        <img src={item.imageUrl} alt={item.name} className="menu-item-image1" />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <h2>Ingredients</h2>
        <p>{item.ingredients}</p>
        
        <div className="order-section1">
          <label htmlFor="orderCount">Order Count:</label>
          <input
            type="number"
            id="orderCount"
            name="orderCount"
            min="1"
            value={orderCount}
            onChange={handleOrderCountChange}
          />
          <h2>Total Price: Rs.{calculatePrice()}</h2>
        </div>
        <button className="order-button1" onClick={handleOrder}>Place Order</button>
       
        <h2>Top Reviews</h2>
        <ul>
          {item.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}:</strong> {review.comment} ({renderStars(review.rating)})
            </li>
          ))}
        </ul>
        </div>
      </div>
   
  );
};

export default MenuItemDetails;
