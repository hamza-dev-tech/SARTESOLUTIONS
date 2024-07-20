"use client"
import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { containerVariants, tagVaraints, titleVaraints } from "@/src/utils/animation";

const AboutUs = () => {
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={featureVaraints}
      className="a-wrapper"
    >
      <div className="container">
        <div className="a-container">
     
           

            <div className="a-video">
              <video controls>
                <source src="/about.mp4" type="video/mp4" autoPlay />
                Your browser does not support the video tag.
              </video>
            </div>




            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
            className="hit-feature">
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
            
                  <span className="sec-title">Innovative Solutions</span>
                  <span className="text"> We specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies.</span>
                </motion.div>
              
              </motion.div>



            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
            className="hit-feature">
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
            
                  <span className="sec-title">Our Expertise</span>
                  <span className="text"> Our team of experts works closely with you to understand your goals and deliver customized solutions that drive growth and efficiency. Whether you need a stunning website, robust IT infrastructure, or a comprehensive digital marketing strategy, we have you covered.</span>
                </motion.div>
              
              </motion.div>


            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
            className="hit-feature">
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
            
                  <span className="sec-title">Customer-Centric Approach</span>
                  <span className="text">   We believe in a customer-centric approach, ensuring that our solutions are tailored to meet your specific needs. Our team is dedicated to providing exceptional service and support to help you achieve your business goals.</span>
                </motion.div>
              
              </motion.div>



            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
            className="hit-feature">
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
            
                  <span className="sec-title">Our Mission</span>
                  <span className="text">  Our mission is to empower businesses through innovative digital solutions. We strive to help our clients navigate the ever-evolving digital landscape, ensuring they stay ahead of the competition.</span>
                </motion.div>
              
              </motion.div>



           

            <div className="pictures">
              <img src="/pic1.jpg" alt="Our Team" />
              <img src="/pic2.jpg" alt="Our Office" />
            </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
