import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import AlbumTiles from "../AlbumTiles/AlbumTiles";

const ExploreAlbums = (props) => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredArray = albumsArr.filter((album) => {
    const albumTitle = album.strAlbum.toLowerCase();

    return albumTitle.includes(searchTerm);
  });

  return (
    <>
      <SearchBox
        searchTerm={searchTerm}
        label="albums"
        handleInput={handleInput}
      />
      <AlbumTiles title="Results" albumsArr={filteredArray} />
    </>
  );
};

export default ExploreAlbums;
