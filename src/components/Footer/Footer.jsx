import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get in Touch Today!</span>
          <hr />
          <div
            class="visme_d"
            data-title="Untitled Project"
            data-url="eprj1egx-untitled-project"
            data-domain="forms"
            data-full-page="false"
            data-min-height="1000px"
            data-form-id="74724"
          ></div>
          <hr />
          <div className="f-menu">
            <Link to="os-wrapper" spy={true} smooth={true} offset={100}>
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
            </Link>
          </div>
          <hr />

          <span className="text" style={{ fontSize: "0.9rem" }}>
            © SARTE SOLUTIONS. 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
