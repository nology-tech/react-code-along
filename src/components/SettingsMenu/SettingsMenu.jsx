import React from "react";

import "./SettingsMenu.scss";
import whiteCross from "../../assets/images/white-cross.png";
import profilePicture from "../../assets/images/profile-picture.png";

const SettingsMenu = props => {
  const { userName, toggleSettings  } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings}/>
        <img src={profilePicture} className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
      </div>
    </div>
  );
};

export default SettingsMenu;