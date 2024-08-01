import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import Services from "@/src/services/Services";
import React from "react";
import "./services.css"
import Hero from "@/src/components/Hero/Hero";

export const metadata = {
  title: "Services | Sarte Solution",
  description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/services`,
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Services | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    url: `${process.env.NEXTAUTH_URL}/services`,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Services | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "DigitalSolutions",
    headline: "Services | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },

  },
};


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
