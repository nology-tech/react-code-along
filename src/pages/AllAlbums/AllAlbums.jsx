import React from "react";

import "./AllAlbums.scss";

import Carousel from "../../components/Carousel/Carousel";

const AllAlbums = props => {
  const { albums } = props;

  const imagesArr = albums.filter(album => album.strAlbumThumb).map(album => album.strAlbumThumb);

  return (
    <section className="all-albums">
      <h1 className="all-albums__heading">All Albums</h1>

      <div className="all-albums__carousel">
        <Carousel imagesArr={imagesArr} />
      </div>
    </section>
  );
};

export default AllAlbums;
