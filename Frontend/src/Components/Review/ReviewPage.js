import React, { useState } from 'react';
import './ReviewPage.css';

const reviews = [
    {
        rating: 5,
        date: 'Aug 08, 2024',
        text: 'Hi. I recently came to know about PrimePlates from a friend. First, I was hesitant about how the food would be, but I opted for a veg trio pack and was pleasantly surprised!',
        author: 'srnnp school'
    },
    {
        rating: 4,
        date: 'Jul 24, 2024',
        text: 'Good food, timely delivery. The packaging is impressive too!',
        author: 'Aravind Kumar'
    },
    {
        rating: 3,
        date: 'Jul 17, 2024',
        text: 'Thanks, PrimePlates. I had to choose you because my mom passed away recently. My mom was a good cook, and my dad was addicted to her taste. Unfortunately, your food couldn’t quite match up, but it’s still a decent option.',
        author: 'Karthikeyan Sekar'
    },
    {
        rating: 5,
        date: 'Aug 02, 2024',
        text: 'PrimePlates has been a lifesaver for me as a student. Affordable, tasty, and healthy meals delivered right to my doorstep!',
        author: 'Rohit Sharma'
    },
    {
        rating: 4,
        date: 'Jul 30, 2024',
        text: 'Great variety of dishes, especially the non-veg options. Delivery was quick and the food was still hot.',
        author: 'Neha Gupta'
    },
    {
        rating: 5,
        date: 'Jul 28, 2024',
        text: 'PrimePlates has exceeded my expectations! The food is delicious, and the portion sizes are just right. I’m hooked!',
        author: 'Priya Patel'
    },
    {
        rating: 4,
        date: 'Jul 25, 2024',
        text: 'I’ve tried multiple online mess services, but PrimePlates stands out for its consistency and quality. Highly recommend!',
        author: 'Ankit Verma'
    },
    {
        rating: 5,
        date: 'Jul 22, 2024',
        text: 'The best online mess service I’ve tried so far. Fresh, tasty, and delivered on time every day.',
        author: 'Sneha Rao'
    },
    {
        rating: 3,
        date: 'Jul 20, 2024',
        text: 'The food is okay, but I’ve had better. The delivery was late a couple of times.',
        author: 'Vikram Singh'
    },
    {
        rating: 5,
        date: 'Jul 18, 2024',
        text: 'PrimePlates has become my go-to for daily meals. The food quality is top-notch and the delivery is always on time.',
        author: 'Rajesh Iyer'
    }
];

const ReviewCard = ({ rating, date, text, author }) => (
    <div className="review-card">
        <div className="review-header">
            <div className="review-stars">
                {[...Array(5)].map((star, index) => (
                    <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
                ))}
            </div>
            <span className="review-date">{date}</span>
        </div>
        <p className="review-text">{text}</p>
        <div className="review-author">
            <span>{author}</span>
        </div>
    </div>
);

const ReviewPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
    };

    const prevReviews = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
    };

    return (
        <div className="review-page">
            <h2>Read What Others Have To Say</h2>
            <div className="overall-rating">
                <span className="rating-value">4.90 ★</span>
                <span className="review-count">288 reviews</span>
            </div>
            <div className="review-carousel">
                <button onClick={prevReviews} className="carousel-btn">‹</button>
                <div className="review-cards">
                    {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                        <ReviewCard
                            key={index}
                            rating={review.rating}
                            date={review.date}
                            text={review.text}
                            author={review.author}
                        />
                    ))}
                </div>
                <button onClick={nextReviews} className="carousel-btn">›</button>
            </div>
        </div>
    );
};

export default ReviewPage;
