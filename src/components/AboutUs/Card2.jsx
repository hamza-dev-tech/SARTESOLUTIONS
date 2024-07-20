"use client"
import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { containerVariants, tagVaraints, titleVaraints } from "@/src/utils/animation";

const Card2 = () => {
  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={containerVariants}
    className="a-wrapper">
      <div className="container"
      
      >
        <motion.div className="a-container" initial="offscreen"
      whileInView="onscreen"
      variants={containerVariants}>
        
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card2;
