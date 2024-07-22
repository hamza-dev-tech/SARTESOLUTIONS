import React from "react";
import "./Card.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Card = () => {
    
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
    whileInView={"onscreen"}
    variants={featureVaraints} className="post">
      <div className="cardimageContainer">
        <Image src="/pic1.jpg" alt="" fill className="cardimage"/>
      </div>
      <div className="cardTextContainer">
        <div className="cardDetail">
            <span className="date">11.2.2023</span>
            <span className="dash">-</span>
            <span className="cardcategory">CULTURE</span>
        </div>
        < Link href="/">
        <h1 className="cardTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, voluptate?</h1></Link>
        <p className="carddesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium praesentium officia amet assumenda eum illo obcaecati corporis! Sequi iste laborum magni iusto nisi eligendi similique, </p>

        <Link className="cardlink" href="/">Read More</Link>

      </div>

    </motion.div>
  );
};

export default Card;
