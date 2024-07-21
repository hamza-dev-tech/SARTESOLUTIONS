"use client"
import React from "react";
import SlickSlider from "./SlickSlider";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";

const Testemonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              Testimonials
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Client Success, Our Commitment
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="des"
            >
              What people say about us
            </motion.span>
          </div>
        </div>
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testemonials;
