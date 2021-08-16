import React from "react";

import "./NavMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

import { Link } from "react-router-dom";

const NavMenu = props => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />
        <Link className="nav-menu__item" to="/" onClick={toggleNav}>
          Home
        </Link>

        <Link className="nav-menu__item" to="/all" onClick={toggleNav}>
          All Albums
        </Link>

        <Link className="nav-menu__item" to="/rating" onClick={toggleNav}>
          Rated Albums
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
