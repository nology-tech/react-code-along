import React from "react";
import styles from "./DiscoverArtist.module.scss";
import Button from "../Button";

const DiscoverArtist = props => {
  return (
    <div className={styles.discover}>
      <img src={props.imgSrc} />
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
