import React, {useState} from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import NavMenu from "../NavMenu/NavMenu";
import "./Nav.scss";

const Nav = (props) => {
const { userName } = props;
const [showSettings, setShowSettings] = useState(false)
const [showNav, setShowNav] = useState(false)
const toggleSettings = () => {
  setShowSettings(!showSettings)
}
const toggleMenu = () => {
  setShowNav(!showNav)
}

  return (
    <nav className="nav">
      {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings}/>}
      {showNav && <NavMenu toggleNav={toggleMenu}/>}      
      <img src={menu} className="nav__item " alt="menu icon" onClick={toggleMenu} />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon"  onClick={toggleSettings}/>
    </nav>
  );
};

export default Nav;