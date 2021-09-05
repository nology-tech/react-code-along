import React from "react";

import "./AlbumInfo.scss";

import { useParams } from "react-router";

const AlbumInfo = props => {
  const { albumsArr } = props;
  const { albumId } = useParams();

  const currentAlbum = albumsArr.find(album => album.idAlbum === albumId);
  const { strAlbumThumb, strAlbum, strMood, intYearReleased, strGenre, intScore, strDescriptionEN } = currentAlbum;

  const lastSentenceIndex = strDescriptionEN?.indexOf(".", 300) + 1;
  const shortenedText = strDescriptionEN?.substring(0, lastSentenceIndex) ?? "No description given.";

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{strAlbum}</h2>
        <p>{shortenedText}</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {strMood} </li>
          <li>Released : {intYearReleased} </li>
          <li>Genre : {strGenre} </li>
          <li>Score : {intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--last" />
      </div>
    </article>
  );
};

export default AlbumInfo;
