import React from "react";
import "./NavBar.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      {/* <div className="container"> */}
        <div className="nav-container">

          <div className="links">
            
            <Link href="/blog" className="link">
              Blogs
            </Link>
           
            <Link href="/blog" className="link">
              LogIn
            </Link>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
