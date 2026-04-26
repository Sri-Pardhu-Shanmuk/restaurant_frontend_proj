import React from "react";
import "./reviewscss.css";

const reviewsData = [
  {
    name: "Aarav Sharma",
    rating: 5,
    text: "Amazing food and ambiance. The biryani was perfectly cooked and full of flavor. Definitely coming back!"
  },
  {
    name: "Neha Reddy",
    rating: 4,
    text: "Loved the vibe of the place. Service was quick and the desserts were really good."
  },
  {
    name: "Rahul Verma",
    rating: 5,
    text: "One of the best dining experiences I’ve had. Great quality food and very professional staff."
  }
];

const Reviews = () => {

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const handleReviewClick = () => {
    alert("Review submission is not available because this is a demo project. In a real application, this would be connected to a live review system like Google Reviews.");
  };

  return (
    <section className="reviews">
      <h1>What Our Customers Say</h1>

      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            
            <div className="stars">
              {renderStars(review.rating)}
            </div>

            <p className="review-text">"{review.text}"</p>

            <h3 className="review-name">— {review.name}</h3>

          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="review-btn-container">
        <button className="review-btn" onClick={handleReviewClick}>
          Write a Review
        </button>
      </div>

    </section>
  );
};

export default Reviews;