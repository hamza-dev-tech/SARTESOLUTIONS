"use client"
import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { containerVariants, tagVaraints, titleVaraints } from "@/src/utils/animation";
import Card from "./Card";
import Card2 from "./Card2";

const AboutUs = () => {
  return (
    <div className="a-wrapper">
      <Card />
      <Card2 />
    </div>
  );
};

export default AboutUs;
