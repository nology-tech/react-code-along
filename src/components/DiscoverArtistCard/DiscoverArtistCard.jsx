import React from "react";
import "./DiscoverArtistCard.scss";
import Button from "../Button/Button";

const DiscoverArtistCard = props => {
  return (
    <div className="discover-artist-card">
      <img src={props.imgSrc} className="discover-artist-card__img" alt={props.title} />
      <div className="discover-artist-card__content">
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtistCard;
