import React, { useState } from "react";
import "./DiscoverArtistCard.scss";
import Button from "../Button/Button";

const DiscoverArtistCard = props => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  let discoverCardContentJSX = (
    <div className="content">
      <h3>{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  if (showText) {
    discoverCardContentJSX = (
      <div className="content--text" onClick={handleClick}>
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
      {discoverCardContentJSX}
    </div>
  );
};

export default DiscoverArtistCard;
