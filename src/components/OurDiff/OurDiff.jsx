"use client"
import React from "react";
import "./OurDiff.css";
import { features, ourDiffFeatures } from "@/src/utils/data";
import { motion } from "framer-motion";
import { containerVariants, desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              What Sets Us Apart
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Innovative Solutions, Quality and Reliability
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="text"
            >
              We are dedicated to delivering innovative solutions tailored to
              your needs. Our stringent QA process ensures top-notch quality and
              reliability. We prioritize your needs and deliver exceptional
              customer service.
            </motion.span>
          </div>
          {/* Features */}

          <div className="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants((i+1)*0.5)}
              key={i} className="od-feature">
                <img
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
