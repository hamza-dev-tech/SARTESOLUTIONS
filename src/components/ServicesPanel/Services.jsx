"use client"
import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { desVaraints, tagVaraints, titleVaraints } from "@/src/utils/animation";

const columnVariants = {
  hiddenTop: { opacity: 0, y: -100 },
  hiddenBottom: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const imageVariants1and3 = {
  hidden: { opacity: 0, scale: 0.8, rotate: -45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const imageVariants2 = {
  hidden: { opacity: 0, scale: 0.8, rotate: 45 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};


const Services = () => {
  return (
    <div className="os-wrapper">
      <div className="container">
        <div className="os-container">
          <div className="os-head">
            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVaraints}
            className="tag">Our services</motion.span>
            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVaraints}
            className="title">
              Design-led digital products
            </motion.span>
            <motion.span 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVaraints}
            className="description">
              Here is what we do
            </motion.span>
          </div>
          <div className="os-table">
          <motion.div
              className="table-col"
              initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, }}
            >
              <span className="title">Strategy</span>
              <span className="sec-title">Discover</span>
              <span className="text">Product auditing</span>
              <span className="text">Business and data analysis</span>
              <span className="text">Segmentation and personas</span>
              <span className="text">User research</span>
              <span className="sec-title">Operations</span>
              <span className="text">Product management</span>
              <span className="text">Project management</span>
              <span className="sec-title">Marketing</span>
              <span className="text">Content Marketing</span>
              <span className="text">Social Media Marketing</span>
              <span className="text">Email Marketing</span>
              <span className="text">SEO/SEM</span>
              <span className="text">Digital Marketing</span>
            </motion.div>
            <motion.div
              className="table-col"
              initial="hiddenBottom"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, delay:0.5 }}
            >
              <span className="title">Design</span>
              <span className="sec-title">Interface</span>
              <span className="text">User experience strategy</span>
              <span className="text">User experience design</span>
              <span className="text">User interface design</span>
              <span className="text">Design systems</span>
              <span className="text">User testing</span>
              <span className="sec-title">Brand</span>
              <span className="text">Brand strategy</span>
              <span className="text">Brand identity</span>
              <span className="text">Logo design</span>
              <span className="text">Brand guidelines</span>
              <span className="sec-title">Multimedia</span>
              <span className="text">Illustration</span>
              <span className="text">Video and motion design</span>
            </motion.div>
            <motion.div
              className="table-col"
              initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 0.5, delay:1 }}
            >
              <span className="title">Development</span>
              <span className="sec-title">Front-end</span>
              <span className="text">React</span>
              <span className="text">NextJS</span>
              <span className="text">React Native</span>
              <span className="text">Kotlin</span>
              <span className="text">Vue</span>
              <span className="text">CMS</span>
              <span className="sec-title">Back-end</span>
              <span className="text">Node</span>
              <span className="text">Python</span>
              <span className="text">PHP</span>
              <span className="sec-title">DevOps</span>
              <span className="text">Hosting and maintenance</span>
              <span className="text">Infrastructure setup</span>
            </motion.div>
          </div>
          <motion.div  initial="hiddenTop"
              whileInView="visible"
              variants={columnVariants}
              transition={{ duration: 1 }} className="os-images">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/8164/8164154.png"
              alt="Strategy"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants1and3}
              transition={{ duration: 1,delay:1 }}
            />
            <motion.img
              src="https://cdn-icons-png.freepik.com/512/6214/6214112.png"
              alt="Design"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants2}
              transition={{  duration: 1,delay:1 }}
            />
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/2620/2620686.png"
              alt="Development"
              className="os-image"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants1and3}
              transition={{  duration: 1,delay:1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
