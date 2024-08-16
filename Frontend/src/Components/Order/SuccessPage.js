// SuccessPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './SuccessPage.css'; // Import CSS for styling if needed

const SuccessPage = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Set a timer to hide the success message after 3 seconds and then redirect
    const timer = setTimeout(() => {
      setShow(false);
      navigate('/Home'); // Redirect to homepage after hiding the message
    }, 5000); // 3000 milliseconds = 3 seconds

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]); // Add navigate to the dependency array

  if (!show) {
    return null; // Do not render the component if `show` is false
  }

  return (
    <div className="success-container">
      <div className="success-message">
        <h1>Order Placed Successfully!</h1>
        <p>Your order has been successfully placed. Delivery will be made to the address at the specified time.</p>
        <img src="https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-green-check-mark-png-image_6525691.png" alt="Success" className="success-image" />
      </div>
    </div>
  );
};

export default SuccessPage;
