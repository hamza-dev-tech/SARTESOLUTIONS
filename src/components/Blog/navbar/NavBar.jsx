import React from "react";
import "./NavBar.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      {/* <div className="container"> */}
        <div className="nav-container">

          <div className="links">
            
            <Link href="/blog" className="link">
              Blogs
            </Link>
           
            
            <AuthLinks />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
