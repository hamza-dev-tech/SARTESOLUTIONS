import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css"

import React from "react";

import Hero from "@/src/components/Hero/Hero";
import AboutUs from "@/src/components/AboutUs/AboutUs";

const About = () => {
  return (
    <div className="app">
      <Navbar  />
      <Hero title1="About Us" des="At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age." />

      <AboutUs />
     
      <Footer />
    </div>
  )
}

export default About
