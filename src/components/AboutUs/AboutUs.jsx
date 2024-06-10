/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { containerVariants, tagVaraints, titleVaraints } from "@/src/utils/animation";
import { whoWeInvest } from "@/src/utils/data";
const AboutUs = () => {
  return (
    <div className="a-wrapper">
      <div className="container">
        <div className="a-container">
          <div className="a-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="tag"
              >
                Wanna know more about us
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Our team
              </motion.span>
            </div>

            <div className="a-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                variants={containerVariants(i * 0.05 +1)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="a-feature" key={i}>
                  <div className="icon">
                    <img
                      alt="icon"
                      src={feature.icon}
                      width={200}
                      height={200}
                      style={{ translate: "50% 0rem" }}
                    />
                  </div>

                  <div className="a-detail">
                    <span className="des">{feature.title}</span>
                    <span className="text">{feature.des}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
