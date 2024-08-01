"use client"
import React from "react";
import "./Footer.css";

import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get in Touch Today!</span>
       
        
          <hr />
          <div className="f-menu">
            {/* <Link to="os-wrapper" spy={true} smooth={true} offset={100}>
              <span>Services</span>
            </Link>
            <Link to="hit-wrapper" spy={true} smooth={true} offset={100}>
              <span>How it works</span>
            </Link>
            <Link to="a-wrapper" spy={true} smooth={true} offset={100}>
              <span>About</span>
            </Link>
            <Link to="t-wrapper" spy={true} smooth={true} offset={100}>
              <span>Testimonials</span>
            </Link> */}
             <a style={{ color: "#fff",fontWeight:"bold", textDecoration: 'none' }} href="/"><span>Home</span></a>
              <a style={{ color: "#fff",fontWeight:"bold", textDecoration: 'none' }} href="/services">Services</a>
              <a style={{ color: "#fff",fontWeight:"bold", textDecoration: 'none' }} href="/about">About</a>
              <a style={{ color: "#fff",fontWeight:"bold", textDecoration: 'none' }} href="/blog">Blog</a>
              <a style={{ color: "#fff",fontWeight:"bold", textDecoration: 'none' }} href="/contact">Contact</a>
              <a style={{ color: "#fff", fontWeight: "bold", textDecoration: 'none' }} href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
          <hr />
          <div className="contact-details">
          <a href="https://wa.me/923038661499" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="contact-icon" /></a>
          <a href="https://www.instagram.com/sarte_solution?igsh=M3N2djAydnBiZmN2&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="contact-icon" /></a>
              <a href="https://www.facebook.com/share/kmVVndYianNYsEXG/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook className="contact-icon"  /></a>
              <a href="https://www.tiktok.com/@sarte559?_t=8oVSY1J2yAf&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className="contact-icon"  /></a>
              <a href="https://www.linkedin.com/in/sarte-solution-undefined-4a9246320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className="contact-icon"  /></a>
              <a href="https://www.youtube.com/@SarteSolution" target="_blank" rel="noopener noreferrer"><FaYoutube className="contact-icon"  /></a>
              
          
         
          
          </div>
          <hr />
          <span className="text" style={{ fontSize: "0.9rem",  color: "rgba(255, 255, 255, 0.332)" }}>
            © SARTE SOLUTION. 2024. All Rights Reserved.
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
