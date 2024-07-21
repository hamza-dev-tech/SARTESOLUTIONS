"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import { useViewportScroll, motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [color, setColor] = useState("white");
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 200) {
        setNavStyle("sticky");
        setColor("#00caf9");
      } else {
        setNavStyle("");
        setColor("white");
      }
    };

    handleScroll();
    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left side */}
          <div className="n-logo">
            <Link style={{ textDecoration: 'none' }} href="/">
            <span
              className="sec-title"
              style={{ fontSize: "1.5rem", fontWeight: "bold", color: color }}
            >
              SARTE
            </span>
            <span className="sec-title" style={{ fontSize: "1.4rem" }}>
              SOLUTION
            </span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <a style={{ color: color, textDecoration: 'none' }} href="/"><span>Home</span></a>
              <a style={{ color: color, textDecoration: 'none' }} href="/services">Services</a>
              <a style={{ color: color, textDecoration: 'none' }} href="/about">About</a>
              <a style={{ color: color, textDecoration: 'none' }} href="/blog">Blog</a>
              <a className="JoinBtn" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="nm-container">
        {/* Logo */}
        <Link style={{ textDecoration: 'none' }} href="/">
          <div className="n-logo" onClick={() => setMobileMenuOpened(false)}>
            <span
              className="sec-title"
              style={{ fontSize: "1.1rem", fontWeight: "bold", color: "white" }}
            >
              SARTE
            </span>
            <span className="sec-title" style={{ fontSize: "1rem" }}>
              SOLUTION
            </span>
          </div>
        </Link>

        {/* Menu Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened ? "translateX(0%)" : "translateX(-100%)" }}
        >
          <a style={{ color: 'white', textDecoration: 'none' }} href="/" onClick={() => setMobileMenuOpened(false)}>
            Home
          </a>
          <a style={{ color: 'white', textDecoration: 'none' }} href="/services" onClick={() => setMobileMenuOpened(false)}>
            Services
          </a>
          <a style={{ color: 'white', textDecoration: 'none' }} href="/about" onClick={() => setMobileMenuOpened(false)}>
            About
          </a>
         
          <a style={{ color: 'white', textDecoration: 'none' }} href="/blog" onClick={() => setMobileMenuOpened(false)}>
            Blog
          </a>
          <a style={{ textDecoration: 'none' }} className="m-JoinBtn" href="/contact" onClick={() => setMobileMenuOpened(false)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
