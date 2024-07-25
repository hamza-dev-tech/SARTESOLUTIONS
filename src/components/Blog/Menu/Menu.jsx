"use client";
import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [pickedPosts, setPickedPosts] = useState([]);
  const [popularError, setPopularError] = useState(null);
  const [pickedError, setPickedError] = useState(null);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch("https://sartesolutions.vercel.app/api/posts/popular"); // Ensure HTTPS is used
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Error fetching popular posts");
        }
        setPopularPosts(data.posts);
      } catch (error) {
        setPopularError(error.message);
        console.error("Error fetching popular posts:", error);
      }
    };

    const fetchPickedPosts = async () => {
      try {
        const response = await fetch("https://sartesolutions.vercel.app/api/posts/picked"); // Ensure HTTPS is used
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Error fetching picked posts");
        }
        setPickedPosts(data.posts);
      } catch (error) {
        setPickedError(error.message);
        console.error("Error fetching picked posts:", error);
      }
    };

    fetchPopularPosts();
    fetchPickedPosts();
  }, []);

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu">
          <h2 style={{ fontSize: "1.2rem" }} className="title2">{"What's hot"}</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Popular</h1>
          {popularError ? (
            <div>Error: {popularError}</div>
          ) : (
            <MenuPosts posts={popularPosts} withImage={true} />
          )}
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Discover by topic</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Categories</h1>
          <MenuCategories />
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Chosen by the editor</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Editors Pick</h1>
          {pickedError ? (
            <div>Error: {pickedError}</div>
          ) : (
            <MenuPosts posts={pickedPosts} withImage={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
