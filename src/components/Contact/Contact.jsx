"use client"

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./cotact.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mtedpnl', 'service_mtedpnl', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <div className="contact-details">
          <div className="contact-info">
            <span className='tag'>Our Office</span> <br />
            <span className='des'>Sarte Solution</span><br />
            <span className='text'>Email: <a href="mailto:info@sarte.com">info@sartesolution.com</a></span><br />
            <span className='text'>Phone: <a href="tel:+923038661499">(+92) 303-8661499</a></span><br />

            <div className="social-icons">
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
          
          <div className="contact-form">
          
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-q01og4z90v/locator-plus/w7u5/locator-plus.html"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
