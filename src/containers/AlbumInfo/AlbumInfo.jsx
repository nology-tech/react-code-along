import React from "react";

import "./AlbumInfo.scss";

import { useParams } from "react-router";

const AlbumInfo = props => {
  const { albumsArr } = props;
  const { albumId } = useParams();

  const currentAlbum = albumsArr.find(album => album.idAlbum === albumId);

  const shortenedText = currentAlbum.strDescriptionEN?.split(/[.] /).slice(0, 3).join(".");

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img
          src={currentAlbum.strAlbumThumb}
          alt={currentAlbum.strAlbum}
          className="album-info__img album-info__img--first"
        />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{currentAlbum.strAlbum}</h2>
        <p>{shortenedText || "..."}</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {currentAlbum.strMood} </li>
          <li>Released : {currentAlbum.intYearReleased} </li>
          <li>Genre : {currentAlbum.strGenre} </li>
          <li>Score : {currentAlbum.intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img
          src={currentAlbum.strAlbumThumb}
          alt={currentAlbum.strAlbum}
          className="album-info__img album-info__img--last"
        />
      </div>
    </article>
  );
};

export default AlbumInfo;
