import React from "react";
import "./ArtistTile.scss";
import Button from "../Button/Button";

const DiscoverArtist = props => {
  const { imgSrc, title } = props;
  return (
    <div className="artist-tile">
      <img src={imgSrc} className="artist-tile__img" alt={title} />
      <div className="artist-tile__content artist-tile__content--button">
        <h3 className="artist-tile__heading">{title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
