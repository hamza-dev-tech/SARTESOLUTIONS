"use client";
import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [pickedPosts, setPickedPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await fetch(`/api/popular`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Error fetching popular posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPopularPosts(data.posts);
      } catch (error) {
        console.error("Error fetching popular posts:", error);
      }
    };

    fetchPopularPosts();
  }, []);

  useEffect(() => {
    const fetchPickedPosts = async () => {
      try {
        const response = await fetch(`/api/picked`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Error fetching picked posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPickedPosts(data.posts);
      } catch (error) {
        console.error("Error fetching picked posts:", error);
      }
    };

    fetchPickedPosts();
  }, []);

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu">
          <h2 style={{ fontSize: "1.2rem" }} className="title2">{"What's hot"}</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Popular</h1>
          <MenuPosts posts={popularPosts} withImage={true} />
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Discover by topic</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Categories</h1>
          <MenuCategories />
          <h2 style={{ fontSize: "1.2rem" }} className="subtitle">Chosen by the editor</h2>
          <h1 style={{ fontSize: "2rem", lineHeight: '0rem' }} className="title">Editors Pick</h1>
          <MenuPosts posts={pickedPosts} withImage={true} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
