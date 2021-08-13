import React, { useState } from "react";
import "./ArtistTile.scss";

import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";

const ArtistTile = props => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="artist-tile__content artist-tile__content--button">
      <h3 className="artist-tile__heading">{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="artist-tile__content artist-tile__content--text">
      <img src={whiteCross} className="artist-tile__cross" onClick={handleClick} alt="Close text" />
      <h3 className="artist-tile__heading">{title}</h3>
      {text.split(".").map((sentence,index) => (
        <p key={title + index}>{sentence + "."}</p>
      ))}
    </div>
  );

  return (
    <div className="artist-tile">
      <img src={imgSrc} className="artist-tile__img" alt={props.title} />
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

export default ArtistTile;
