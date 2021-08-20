import React from "react";

import "./SettingsMenu.scss";
import whiteCross from "../../assets/images/white-cross.png";
import profilePicture from "../../assets/images/profile-picture.png";
import Button from "../Button/Button";

const SettingsMenu = props => {
  const { userName, toggleSettings, handleSubmit } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={profilePicture} alt="profile" className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
        <form className="settings-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="settings-menu__input" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="settings-menu__input" />
          <Button isSecondary={true} buttonText={"Save"} />
        </form>
      </div>
    </div>
  );
};

export default SettingsMenu;
