import React from "react";

import "./AlbumGallery.scss";

import Carousel from "../../components/Carousel/Carousel";

const AlbumGallery = props => {
  const { albumsArr, title } = props;

  const imagesArr = albumsArr.filter(album => album.strAlbumThumb).map(album => album.strAlbumThumb);

  return (
    <section className="album-gallery">
      <h1 className="album-gallery__heading">{title}</h1>

      <div className="album-gallery__carousel">
        <Carousel imagesArr={imagesArr} />
      </div>
    </section>
  );
};

export default AlbumGallery;
