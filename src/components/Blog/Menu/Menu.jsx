"use client"
import "./Menu.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { useEffect, useState } from "react";

const fetchPopularPosts = async () => {
  const res = await fetch(`/api/popular`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch popular posts");
  return await res.json();
};

const fetchPickedPosts = async () => {
  const res = await fetch(`/api/picked`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch picked posts");
  return await res.json();
};

const Menu = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [pickedPosts, setPickedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const popularData = await fetchPopularPosts();
      const pickedData = await fetchPickedPosts();
      setPopularPosts(popularData.posts);
      setPickedPosts(pickedData.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
