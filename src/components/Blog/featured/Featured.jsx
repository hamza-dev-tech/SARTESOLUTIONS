"use client";
import React, { useEffect, useState } from "react";
import "./Featured.css";
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { htmlToText } from 'html-to-text';

const Featured = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch top 4 popular posts based on views
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch("/api/posts/featured"); // Update this URL to match your backend endpoint
        const data = await response.json();
        setFeaturedPosts(data.posts);
      } catch (error) {
        console.error("Error fetching Featured posts:", error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  const handleReadMore = () => {
    if (featuredPosts) {
      router.push(`/blog/posts/${featuredPosts.slug}`);
    }
  };

  // Convert HTML to plain text and limit the description length
  const description = featuredPosts.desc 
    ? htmlToText(featuredPosts.desc, { wordwrap: 130 }).substring(0, 200)
    : "";

  return (
    <div className="featured-wrapper">
      <div className="container">
        <div className="featured-container">
          <div className="featured-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Discover Stories and
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              Creative Ideas
            </motion.span>
          </div>

          {featuredPosts && (
            <div className="post">
              <div className="imgContainer">
                <Image
                  style={{ borderRadius: "20px" }}
                  src={featuredPosts.img}
                  alt=""
                  fill
                />
              </div>
              <div className="textContainer">
                <h1 className="postTitle">{featuredPosts.title}</h1>
                <div className="postDesc">{description}</div>
                <button className="button" style={{ cursor: 'pointer' }} onClick={handleReadMore}>
                  Read More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
