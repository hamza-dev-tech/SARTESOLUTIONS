"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Services from "@/src/components/ServicesPanel/Services";
import AboutUs from "@/src/components/AboutUs/AboutUs";

import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import Testemonials from "@/src/components/Testimonials/Testemonials";
import Footer from "@/src/components/Footer/Footer";
import Projects from "@/src/components/Projects/Projects";

export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero title1="Redifine How" title2 ="You Grow" des = "At SARTE SOLUTION, we specialize in delivering innovative and customized software solutions to drive your business forward. Our team of experts is dedicated to turning your vision into reality. Partner with us to unlock your full potential and achieve unparalleled success." />
      <BrandingVideo />
      <Services />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--third-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
      
      </motion.div>
      <Testemonials />
      <Footer />
    </motion.div>
  );
}
