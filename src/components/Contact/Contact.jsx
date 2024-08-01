"use client"

import React, { useRef } from 'react';
import "./cotact.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mtedpnl', 'template_yfy4ho7', form.current, 'info@sartesolution.com')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try to contect on email directly.");
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <div className="contact-details">
          <div className="contact-info">
            <span className='tag'>Our Office</span> <br /><br />
            <span className='des'>Sarte Solution</span><br /><br />
            <span className='text'>Email: <a href="mailto:info@sartesolution.com">info@sartesolution.com</a></span><br /><br />
            <span className='text'>Phone: <a href="tel:+923038661499">(+92) 303-8661499</a></span><br /><br />

            <div className="social-icons">
              <a href="https://wa.me/923038661499" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/sarte_solution?igsh=M3N2djAydnBiZmN2&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/share/kmVVndYianNYsEXG/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.tiktok.com/@sarte559?_t=8oVSY1J2yAf&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a href="https://www.linkedin.com/in/sarte-solution-undefined-4a9246320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@SarteSolution" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
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
