import React from "react";

import "./NavMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

const NavMenu = props => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav}/>
      <p className="nav-menu__item">Discover</p>
      <p className="nav-menu__item">Discography</p>
      <p className="nav-menu__item">Gallery</p>
      <p className="nav-menu__item">Explore</p>
    </div>
  );
};

export default NavMenu;
