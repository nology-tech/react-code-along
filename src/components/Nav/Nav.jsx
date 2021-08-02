import React from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img src={menu} className={styles.menu} />
      <h2>Ear Worm</h2>
      <img src={settings} />
    </nav>
  );
};

export default Nav;
