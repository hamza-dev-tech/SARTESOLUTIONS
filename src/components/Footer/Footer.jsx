"use client"
import React from "react";
import "./Footer.css";

import { FaInstagram, FaFacebookF, FaYoutube, FaGithub, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
          </div>
          <hr />
          <div className="contact-details">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="contact-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="contact-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="contact-icon" />
            </a>
            
          
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="contact-icon" />
            </a>
          
         
          
          </div>
          <hr />
          <span className="text" style={{ fontSize: "0.9rem" }}>
            © SARTE SOLUTION. 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
