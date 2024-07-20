"use client"

import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';
import "./Reviews.css"; // Add your styles here
import { motion } from "framer-motion";
import { db } from "@/Firebase";
import { FaArrowRight, FaUser } from 'react-icons/fa'; // Import the arrow and user icons from react-icons library

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [totalReviews, setTotalReviews] = useState(0);
  const reviewsWrapperRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "Reviews"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(reviewsData);
      setTotalReviews(reviewsData.length);
    });
    return () => unsubscribe();
  }, []);

  // Function to handle adding a review
  const handleAddReview = async () => {
    if (newReview.trim() === "") {
      alert("Review cannot be empty");
      return;
    }
    await addDoc(collection(db, "Reviews"), {
      review: newReview,
      timestamp: serverTimestamp()
    });
    setNewReview("");
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  // Function to handle Enter key press in input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddReview();
    }
  };

  return (
    <div className="reviews-wrapper"  ref={reviewsWrapperRef}>
      <div className="reviews-panel">
        {reviews.map(({ id, review }, index) => (
          <div key={id} className={`review-item ${index === reviews.length - 1 ? 'highlight' : ''}`}>
            <FaUser className="user-icon" /> {/* User icon */}
            {review}
          </div>
        ))}
      </div>
      <div className="review-input">
        <input
          type="text"
          value={newReview}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Share your thoughts..."
        />
        <FaArrowRight className="submit-icon" onClick={handleAddReview} /> {/* Add arrow icon for submitting review */}
      </div>
    </div>
  );
};

export default Reviews;
