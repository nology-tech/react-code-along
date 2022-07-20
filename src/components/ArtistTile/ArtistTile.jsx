import "./ArtistTile.scss";
import Button from "../Button/Button";

const ArtistTile = (props) => {
  return (
    <div className="artist-tile">
      <img src={props.imgSrc} className="artist-tile__img" alt={props.title} />
      <div className="artist-tile__content">
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default ArtistTile;
