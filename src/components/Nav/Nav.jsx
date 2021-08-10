import React, { useState } from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

import SettingsMenu from "../SettingsMenu/SettingsMenu";

const Nav = props => {
  const { userName } = props;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      {showMenu && <SettingsMenu userName={userName} toggleMenu={toggleMenu}/>}
      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Nav;
