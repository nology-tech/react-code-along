import "./Home.scss";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

import Button from "../../components/Button/Button";
import ArtistTile from "../../components/ArtistTile/ArtistTile";
import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";
import Carousel from "../../components/Carousel/Carousel";
import ExploreAlbums from "../ExploreAlbums/ExploreAlbums";

const Home = props => {
  const { user, unsortedAlbums, sortedAlbums, artist } = props;

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  const galleryImages = [
    artist.strArtistFanart,
    artist.strArtistFanart2,
    artist.strArtistFanart3,
    artist.strArtistFanart4,
  ];

  return (
    <>
      <div className="home">
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>
        <section className="button-section">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section>
        <section className="discover">
          <h2>Discover</h2>
          <ArtistTile imgSrc={artist.strArtistThumb} title={artist.strArtist} text={artist.strBiographyEN} />
        </section>
        <section className="discography">
          <h2 className="discography__heading">Discography</h2>

          <div className="all-albums">
            <AlbumTiles title="Albums" albumsArr={unsortedAlbums.slice(0, 9)} />
          </div>

          <div className="highest-rated">
            <AlbumTiles title="Highest Rated" albumsArr={sortedAlbums.slice(0, 9)} />
          </div>
        </section>

        <section className="gallery">
          <h2 className="gallery__heading">Gallery</h2>
          <Carousel imagesArr={galleryImages} />
        </section>
        <section className="explore">
          <h2 className="explore__heading">Explore</h2>
          <ExploreAlbums albumsArr={unsortedAlbums} />
        </section>
      </div>
    </>
  );
};

export default Home;
