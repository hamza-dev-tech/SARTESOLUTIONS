"use client";

import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import "./Reviews.css"; // Add your styles here
import { db } from "@/Firebase";
import { FaArrowRight, FaUser } from 'react-icons/fa'; // Import the arrow and user icons from react-icons library
import { useSession } from "next-auth/react";
import Image from "next/image";

const Reviews = () => {
  const { data: session, status } = useSession();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const reviewsWrapperRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "Reviews"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(reviewsData);

      // Scroll to bottom
      if (reviewsWrapperRef.current) {
        reviewsWrapperRef.current.scrollTop = reviewsWrapperRef.current.scrollHeight;
      }
    });
    return () => unsubscribe();
  }, []);

  // Function to handle adding a review
  const handleAddReview = async () => {
    if (newReview.trim() === "") {
      alert("Review cannot be empty");
      return;
    }
    if (!session) {
      alert("You must be logged in to submit a review.");
      return;
    }
    await addDoc(collection(db, "Reviews"), {
      review: newReview,
      user: {
        name: session.user.name,
        image: session.user.image,
      },
      timestamp: serverTimestamp()
    });
    setNewReview("");
    // Scroll to bottom after adding a new review
    if (reviewsWrapperRef.current) {
      reviewsWrapperRef.current.scrollTop = reviewsWrapperRef.current.scrollHeight;
    }
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
    <div className="reviews-wrapper">
      <div className="reviews-panel" ref={reviewsWrapperRef}>
        {reviews.map(({ id, review, user }, index) => (
          <div key={id} className={`review-item ${index === reviews.length - 1 ? 'highlight' : ''}`}>
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={40}
                height={40}
                className="user-icon"
              />
            ) : (
              <FaUser className="user-icon" /> // User icon
            )}
            <div className="info">
              <span className="user-name">{user?.name}</span> {/* Display user's name */}
              <span className="review-text">{review}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="review-input">
        <input
          type="text"
          value={newReview}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={session ? "Share your thoughts..." : "Log in to drop a review"}
          disabled={!session}
        />
        {session && <FaArrowRight className="submit-icon" onClick={handleAddReview} />} {/* Add arrow icon for submitting review */}
      </div>
    </div>
  );
};

export default Reviews;
