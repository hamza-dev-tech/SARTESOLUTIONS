"use client";

import "./Video.css";
import { motion} from "framer-motion";
import styled from "styled-components";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Services.css";






const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export default function ServiceCategory({ title, services, isOdd, vid }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 2], [0.6, 2]);

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
     
        
        {/* <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              {title}
            </motion.span>
        <div className="bv-container">
        <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
              className="container">
               
          
          <motion.video
              className="bv-video"
              controls
              
            >
              <source src={vid} type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
        {services.map((service, index) => (
          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={featureVaraints}
          key={index} className="hit-feature">
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
            <ServiceIcon>{service.icon}</ServiceIcon>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
             {service.name}
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="text"
            >
             {service.description}
            </motion.span>
            
          </motion.div>
          </motion.div>
        ))} */}

<div className="hit-container">
          {/* Head */}
          <div className="hit-head">
            
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              {title}
            </motion.span>

           
    
               
          
          <motion.video
              className="bv-video"
              controls
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
            >
              <source src={vid} type="video/mp4" />
            </motion.video>
      
        
          <div className="hit-features">
          {services.map((service, index) => (
              <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={featureVaraints}
              key={index} className="hit-feature">
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
                  <span className="des">0{index + 1}</span>
                  <span className="sec-title">{service.name}</span>
                  <span className="text">{service.description}</span>
                </motion.div>
                <div className="icon">
                <ServiceIcon>{service.icon}</ServiceIcon>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



     </div>
     </div>
     </div>
   
  );
}
