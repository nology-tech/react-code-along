// AlbumInfo.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./AlbumInfo.scss";

const AlbumInfo = props => {
  const { albumsArr } = props;

  const {albumID} = useParams()

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">ALBUM-TITLE</h2>
        <p>ALBUM-TEXT</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : ALBUM-MOOD </li>
          <li>Released : ALBUM-YEAR-RELEASED </li>
          <li>Genre : ALBUM-GENRE </li>
          <li>Score : ALBUM-SCORE </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last" />
      </div>
    </article>
  );
};

export default AlbumInfo;