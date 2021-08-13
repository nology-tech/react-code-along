import React from "react";

import "./AlbumTiles.scss";

const AlbumTiles = props => {
  const { title, albumsArr } = props;

  const cardListJSX = albumsArr.map((album, index) => (
    <img className="album-tiles__img" key={title + (index + 1)} src={album.strAlbumThumb} alt={album.strAlbum} />
  ));
  return (
    <>
      <h3>{title}</h3>
      <div className="album-tiles">{cardListJSX}</div>
    </>
  );
};

export default AlbumTiles;
