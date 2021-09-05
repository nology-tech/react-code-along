import React, { useState } from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

import SettingsMenu from "../SettingsMenu/SettingsMenu";
import NavMenu from "../NavMenu/NavMenu";

const Nav = props => {
  const { userName, handleSubmit } = props;
  const [showSettings, setShowSettings] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit}/>}
      {showNav && <NavMenu toggleNav={toggleNav} />}

      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav} />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
    </nav>
  );
};

export default Nav;
