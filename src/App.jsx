import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import DiscoverArtistCard from "./components/DiscoverArtistCard/DiscoverArtistCard";
import DiscographyCardList from "./components/DiscographyCardList/DiscographyCardList";

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

        <header>
          <img src={greetingImg} />
          <h1>
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>

        <section className="button-section">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section>

        <section className="discover">
          <h2>Discover</h2>
          <DiscoverArtistCard imgSrc={artist.strArtistThumb} title={artist.strArtist} />
        </section>

        <section className="discography">
          <h2>Discography</h2>

          <div className="all-albums">
            <DiscographyCardList title="Albums" albumsArr={filteredAlbums} />
          </div>

          <div className="highest-rated">
            <DiscographyCardList title="Highest Rated" albumsArr={highestRating} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
