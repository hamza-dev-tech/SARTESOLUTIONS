"use client"
import React from 'react'
import "./Featured.css"
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import Image from 'next/image';
const Featured = () => {
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
              
            className='tag'>Creative Ideas</motion.span>
          </div>
          <div className='post'>
            <div className='imgContainer'>
              <Image src="/persons.png" alt='' fill />
            </div>
            <div className='textContainer'>
            <h1 className="postTitle">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="button">Read More</button>
            </div>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Featured
