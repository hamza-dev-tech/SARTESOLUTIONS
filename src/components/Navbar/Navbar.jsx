"use client";

import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [color, setColor] = useState("white");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
      setColor("#00caf9");
    } else {
      setNavStyle("");
      setColor("white");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left side */}
          <Link to="h-wrapper" spy={true} smooth={true} offset={100}>
          <div className="n-logo">
            <span
              className="sec-title"
              style={{ fontSize: "1.5rem", fontWeight: "bold", color: color }}
            >
              SARTE
            </span>
            <span className="sec-title" style={{ fontSize: "1.4rem" }}>
              SOLUTIONS
            </span>
          </div>
          </Link>

          {/* right Side */}
          <div className="n-right">
            <div className="n-menu">
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
              <Link to="f-wrapper" spy={true} smooth={true} offset={100}>
                <div className="JoinBtn">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile/tab version */}

      <div className="nm-container">
        {/* logo */}
        <Link  onClick={() => setMobileMenuOpened(false)} to="h-wrapper" spy={true} smooth={true} offset={100}>
        <div className="n-logo">
          <span
            className="sec-title"
            style={{ fontSize: "1.1rem", fontWeight: "bold", color: "white" }}
          >
            SARTE
          </span>
          <span className="sec-title" style={{ fontSize: "1rem" }}>
            SOLUTIONS
          </span>
        </div>
        </Link>

        {/* Menu Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile menu */}

        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="os-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Services</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hit-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="a-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>About</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="f-wrapper"
            spy={true}
            smooth={true}
            offset={100}
          >
            <div className="m-JoinBtn">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
