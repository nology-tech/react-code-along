import React, { useState } from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import DiscographyCardList from "../../components/DiscographyCardList/DiscographyCardList";

const ExploreAlbums = props => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase().trim();
    setSearchTerm(cleanInput);
  };

  const filteredAlbums = albumsArr.filter(album => {
    const albumTitleLower = album.strAlbum.toLowerCase();

    return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
  });

  return (
    <>
      <SearchBox label={"albums"} searchTerm={searchTerm} handleInput={handleInput} />
      <DiscographyCardList title={"Results"} albumsArr={filteredAlbums} />
    </>
  );
};

export default ExploreAlbums;