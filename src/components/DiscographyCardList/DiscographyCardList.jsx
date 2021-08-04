import React from "react";

import "./DiscographyCardList.scss";

const DiscographyCardList = props => {
  const { title, data } = props;
  console.log(data);
  const cardListJSx = data.map((el,index)=> <img key={title + (index + 1)}src={el.strAlbumThumb} />);
  return (
    <>
      <h3>{title}</h3>
      <div className="card-list">{cardListJSx}</div>
    </>
  );
};

export default DiscographyCardList;
