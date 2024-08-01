// app/about/page.js

import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import React from "react";
import Hero from "@/src/components/Hero/Hero";
import AboutUs from "@/src/components/AboutUs/AboutUs";

export const metadata = {
  title: "About | Sarte Solution",
  description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}/about`,
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "About | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    url: `${process.env.NEXTAUTH_URL}/about`,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'About | Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "DigitalSolutions",
    headline: "About | Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },

  },
};

const About = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero title1="About Us" des="At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age." />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
