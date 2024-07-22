"use client";

import React from "react";
import "./CategoryList.css";
import { motion } from "framer-motion";
import {
  
  titleVaraints,
} from "@/src/utils/animation";
import Image from "next/image";
import Link from "next/link";
const CategoryList = () => {
  const featureVaraints = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="cat-wrapper">
      <div className="container">
        <div className="cat-container">
          <div className="cat-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Popular Categories
            </motion.span>
          </div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={featureVaraints}
            className="categories"
          >
            <Link href="/blog?cat=style" className="category style">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
               <span className="des">Technology</span>
            </Link>

            <Link href="/blog" className="category coding">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
               <span className="des">Coding</span>
            </Link>

            <Link href="/blog" className="category fashion">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
               <span className="des">Fashion</span>
            </Link>

            <Link href="/blog?cat=style" className="category culture">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
               <span className="des">Culture</span>
            </Link>

            <Link href="/blog?cat=style" className="category travel">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
               <span className="des">Travel</span>
            </Link>

            <Link href="/blog?cat=style" className="category style">
              <Image
                src="/persons.png"
                alt=""
                width={32}
                height={32}
                className="image"
              />
              <span className="des">Style</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
