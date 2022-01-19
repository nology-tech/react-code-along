import React from "react";
import "./NavMenu.scss";
import blackCross from "../../assets/images/black-cross.png";

const NavMenu = props => {  
  const { toggleMenu } = props;
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleMenu}/>
        <h2 className="nav-menu__title">home</h2>
        <h2 className="nav-menu__title">allAbums</h2>
        <h2 className="nav-menu__title">ratedAlbums</h2>
      </div>
    </div>
  );
};

export default NavMenu;