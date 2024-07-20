import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import Services from "@/src/services/Services";
import React from "react";
import "./services.css"
import Hero from "@/src/components/Hero/Hero";

const Service = () => {
  return (
    <div >
      <Navbar  />
      <Hero title1="Our Services" des="At Sarte Solution Our team of experts works closely with you to understand your goals and deliver customized solutions that drive growth and efficiency. Whether you need a stunning website, robust IT infrastructure, or a comprehensive digital marketing strategy, we have you covered." />
      <Services />
      <Footer />
    </div>
  );
};

export default Service;
