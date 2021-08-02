import React from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={menu} className="menu" />
      <h2>Ear Worm</h2>
      <img src={settings} />
    </nav>
  );
};

export default Nav;
