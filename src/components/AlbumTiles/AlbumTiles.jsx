import "./AlbumTiles.scss";

const AlbumTiles = (props) => {
  const { title, albumsArr } = props;

  const cardListJSX = albumsArr.map((album, index) => (
    <img
      className="album-tiles__img"
      src={album.strAlbumThumb}
      alt={album.strAlbum}
      key={title + (index + 1)}
    />
  ));
  return (
    <>
      <h3>{title}</h3>
      <div className="album-tiles">{cardListJSX}</div>
    </>
  );
};

export default AlbumTiles;
