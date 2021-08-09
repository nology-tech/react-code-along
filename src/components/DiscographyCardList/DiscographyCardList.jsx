import React from "react";

import "./DiscographyCardList.scss";

const DiscographyCardList = props => {
  const { title, albumsArr } = props;
  console.log(albumsArr);
  const cardListJSX = albumsArr.map((album, index) => <img className="card-list__img" key={title + (index + 1)} src={album.strAlbumThumb} />);
  return (
    <>
      <h3>{title}</h3>
      <div className="card-list">{cardListJSX}</div>
    </>
  );
};

export default DiscographyCardList;
