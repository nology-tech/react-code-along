import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import ArtistTile from "./components/ArtistTile/ArtistTile";
import AlbumTiles from "./components/AlbumTiles/AlbumTiles";

import albums from "./data/albums";
import artist from "./data/artist";

const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

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

  // Filter
  const filteredAlbums = albums.filter(album => album.strAlbumThumb).slice(0, 9);

  // Sort
  const highestRating = albums
    .filter(album => album.intScore)
    .sort((a, b) => b.intScore - a.intScore)
    .slice(0, 9);

  return (
    <>
      <div className="app">
        <Nav />

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
            <AlbumTiles title="Albums" albumsArr={filteredAlbums} />
          </div>

          <div className="highest-rated">
            <AlbumTiles title="Highest Rated" albumsArr={highestRating} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
