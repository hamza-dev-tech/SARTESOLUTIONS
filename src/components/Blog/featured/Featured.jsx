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
        const response = await fetch("https://sartesolutions.vercel.app/api/posts/featured"); // Update this URL to match your backend endpoint
        const data = await response.json();
        setFeaturedPosts(data.posts);
      } catch (error) {
        console.error("Error fetching Featured posts:", error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  const handleReadMore = (slug) => {
    router.push(`/blog/posts/${slug}`);
  };

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

          {featuredPosts.length > 0 ? (
            featuredPosts.map(post => (
              <div className="post" key={post.id}>
                <div className="imgContainer">
                  {post.img && (
                    <Image
                      style={{ borderRadius: "20px" }}
                      src={post.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="textContainer">
                  <h1 className="postTitle">{post.title}</h1>
                  <div className="postDesc">
                    {htmlToText(post.desc, { wordwrap: 130 }).substring(0, 500)}
                  </div>
                  <button className="read-button" style={{ cursor: 'pointer' }} onClick={() => handleReadMore(post.slug)}>
                    Read More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No featured posts available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
