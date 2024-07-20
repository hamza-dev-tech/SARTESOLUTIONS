import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import Services from "@/src/services/Services";
import React from "react";
import "./services.css"

const Service = () => {
  return (
    <div >
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default Service;
