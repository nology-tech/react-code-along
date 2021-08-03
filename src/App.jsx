import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import DiscoverArtistCard from "./components/DiscoverArtistCard/DiscoverArtistCard";
import HorizontalTileScroll from "./components/HorizontalTileScroll/HorizontalTileScroll";

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

  const allAlbums = albums.slice(0, 9);

  const highestRating = [...albums].sort((a, b) => b.intScore - a.intScore).slice(0, 9);
  console.log(highestRating);
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
        <section className="buttonSection">
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
            <HorizontalTileScroll title="Albums" data={allAlbums} />
          </div>
          <div>
            <HorizontalTileScroll title="Highest Rated" data={highestRating} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
