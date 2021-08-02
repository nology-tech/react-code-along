import React from "react";
import "./DiscoverArtist.scss";
import Button from "../Button/Button";

const DiscoverArtist = props => {
  return (
    <div className="discover">
      <img src={props.imgSrc} />
      <div className="content">
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
