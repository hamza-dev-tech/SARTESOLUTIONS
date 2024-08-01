// app/about/page.js

import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import React from "react";
import Hero from "@/src/components/Hero/Hero";
import AboutUs from "@/src/components/AboutUs/AboutUs";

export const metadata = {
  title: "About Us - Sarte Solutions",
  description: "At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age.",
  keywords: "Sarte Solutions, about us, digital solutions, web development, IT solutions, digital marketing, emerging technologies",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "About Us - Sarte Solutions",
    description: "At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age.",
    url: `${process.env.NEXTAUTH_URL}/about`,
    images: [
      {
        url: '/opengraph-image-about.png',
        width: 1200,
        height: 630,
        alt: 'Sarte Solutions About Us',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Sarte Solutions",
    description: "At Sarte Solutions, we specialize in delivering cutting-edge digital solutions tailored to meet the unique needs of your business. Our services range from web development and IT solutions to digital marketing and emerging technologies. We are committed to helping your business thrive in the digital age.",
    image: "/opengraph-image-about.png",
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
