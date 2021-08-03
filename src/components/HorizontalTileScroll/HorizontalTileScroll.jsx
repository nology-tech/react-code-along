import React from "react";

import "./HorizontalTileScroll.scss";

const HorizontalTileScroll = props => {
  const { title, data } = props;
  console.log(data);
  const tileJSX = data.map(el => <img src={el.strAlbumThumb} />);
  return (
    <>
      <h3>{title}</h3>
      <div className="horizontal-scroll">{tileJSX}</div>
    </>
  );
};

export default HorizontalTileScroll;
