"use client"
import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import { features, hitFeatures } from "@/src/utils/data";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";

const HowItWorks = () => {
    const featureVaraints= {
        offscreen:{
            scale:0.5,
        },
        onscreen: {
            scale: 1,
            transition: {
                type:"spring",
                duration: 1.5,
            },
        },
    }
  return (
    <div className="hit-wrapper">
      <div className="container">
        <div className="hit-container">
          {/* Head */}
          <div className="hit-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>
          <div className="hit-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
              key={i} className="hit-feature">
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{
                    opacity:1,
                    x:0,
                    transition: {
                        type:"easeIn",
                        duration:1,
                        delay:.7,
                    }
                }}
                className="detail">
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <img
                    alt="icon"
                    src={feature.icon}
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
