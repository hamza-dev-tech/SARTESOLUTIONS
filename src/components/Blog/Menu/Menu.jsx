import React from "react";
import "./Menu.css";

import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className="menu-wrapper">
        <div className="menu-container">
          <div className="menu">
            <h2 className="title2">{"What's hot"}</h2>
            <h1 className="title">Popular</h1>
            <MenuPosts withImage={false} />
            <h2 className="subtitle">Discover by topic</h2>
            <h1 className="title">Categories</h1>
            <MenuCategories />
            <h2 className="subtitle">Chosen by the editor</h2>
            <h1 className="title">Editors Pick</h1>
            <MenuPosts withImage={true} />
          </div>
      </div>
    </div>
  );
};

export default Menu;
