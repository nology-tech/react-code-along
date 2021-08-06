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

  let contentJSX = (
    <div className="content content--button">
      <h3>{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  if (showText) {
    contentJSX = (
      <div className="content content--text">
        <img src={whiteCross} className="content__cross" onClick={handleClick} />
        <h3>{title}</h3>
        {text.split(".").map(sentence => (
          <p>{sentence + "."}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="discoverArtistCard">
      <img src={imgSrc} />
      {contentJSX}
    </div>
  );
};

export default DiscoverArtistCard;
