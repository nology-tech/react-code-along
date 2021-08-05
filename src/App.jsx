import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import artist from "./data/artist";
import DiscoverArtistCard from "./components/DiscoverArtistCard/DiscoverArtistCard";

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
      </div>
    </>
  );
};

export default App;
