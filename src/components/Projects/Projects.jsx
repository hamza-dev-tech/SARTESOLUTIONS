import React from "react";
import "./Projects.css";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import { motion } from "framer-motion";
import ProjectsSlider from "./ProjectsSlider";

import Reviews from "./Reviews";
const Projects = () => {
  return (
    
      <div className="p-wrapper">
        <div className="container">
          <div className="p-container">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Our Projects
              </motion.span>
            </div>
            
          </div>
          <div className="projects">
                <ProjectsSlider />
            </div>
            <div className="reviews">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="sec-title"
              >
                Thoughts
              </motion.span>
              <Reviews />
            </div>
        </div>
      </div>

  );
};

export default Projects;
