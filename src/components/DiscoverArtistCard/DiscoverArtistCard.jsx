import React from "react";
import "./DiscoverArtistCard.scss";
import Button from "../Button/Button";

const DiscoverArtist = props => {
  const { imgSrc, title } = props;
  return (
    <div className="discover-artist-card">
      <img src={imgSrc} className="discover-artist-card__img" alt={title} />
      <div className="discover-artist-card__content discover-artist-card__content--button">
        <h3 className="discover-artist-card__heading">{title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
