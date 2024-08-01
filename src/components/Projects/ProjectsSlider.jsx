"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "./Projects.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { containerVariants } from "@/src/utils/animation";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "@/Firebase";


const ProjectsSlider = () => {

    const [projects, setProjects] = useState([]);

    const settings = {
        dots:true,
        infinite:true,
        speed:1000,
        slidesToShow:3,
        slidesToScroll:1,
        initialSlide:0,
        touchMove:true,
        useCSS:true,
        arrows:true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    initialSlide:2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    }

    useEffect(() => {
        const fetchProjects = async () => {
          const projectsCollection = collection(db, 'Projects');
          const projectsSnapshot = await getDocs(projectsCollection);
          const projectsList = projectsSnapshot.docs.map(doc => doc.data());
          setProjects(projectsList);
        };
    
        fetchProjects();
      }, []);

      return (
        
        <motion.div
          variants={containerVariants(0.05)}
          initial="offscreen"
          whileInView={"onscreen"}
        >
            
          <Slider {...settings}>
            {projects.map((project, id) => (
              <div key={id} className="comment">
                <div className="c-content">
                  <img
                    src={project.projectPic}
                    className="apos-slider"
                    alt={project.projectName}
                    width={"100%"}
                    style={{ maxHeight: "150px", borderRadius: "1rem" }}
                  />
                  <span className="sec-title">{project.projectName}</span>
                 
                <div className="c-info">
                  <img
                    src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                    className="apos-slider"
                    alt="GitHub"
                    width={40}
                    style={{ maxHeight: "40px", borderRadius: "1rem" }}
                  />
                   <div className="c-person">
                    <a className="des" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                  </div>
                </div>
                </div>
                 
              </div>
            ))}
          </Slider>

        </motion.div>
      );
    };

export default ProjectsSlider;
