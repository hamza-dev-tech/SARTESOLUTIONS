
import "./page.css";





import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import BrandingVideo from "../src/components/BrandingVideo/BrandingVideo";
import Services from "../src/components/ServicesPanel/Services";
import OurDiff from "../src/components/OurDiff/OurDiff";
import Projects from "../src/components/Projects/Projects";
import HowItWorks from "../src/components/HowItWorks/HowItWorks";
import Footer from "../src/components/Footer/Footer";
import Testemonials from "../src/components/Testimonials/Testemonials";

export default function Home() {
 
  return (
    <div className="app" >
      <Navbar />
      <Hero title1="Redifine How" title2 ="You Grow" des = "At Solution Solution, we specialize in delivering innovative and customized software solutions to drive your business forward. Our team of experts is dedicated to turning your vision into reality. Partner with us to unlock your full potential and achieve unparalleled success." />
      <BrandingVideo />
      <Services />
      <div
        
      >
        <OurDiff />
      </div>

      <HowItWorks />

      <div
        
      >
        <Projects />
      </div>
      <div
       
      >
      
      </div>
      <Testemonials />
      <Footer />
    </div>
  );
}
