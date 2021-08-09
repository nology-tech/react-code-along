import React, { useState } from "react";
import "./DiscoverArtistCard.scss";

import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";

const DiscoverArtistCard = props => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="discover-artist-card__content discover-artist-card__content--button">
      <h3 className="discover-artist-card__heading">{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="discover-artist-card__content discover-artist-card__content--text">
      <img src={whiteCross} className="content__cross" onClick={handleClick} alt="Close text" />
      <h3 className="discover-artist-card__heading">{title}</h3>
      {text.split(".").map(sentence => (
        <p>{sentence + "."}</p>
      ))}
    </div>
  );

  return (
    <div className="discover-artist-card">
      <img src={imgSrc} className="discover-artist-card__img" alt={props.title} />
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

export default DiscoverArtistCard;
