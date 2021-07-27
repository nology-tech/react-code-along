import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

const App = () => {
  const hour = new Date().getHours();
  let greetingImg = sunrise;

  if (hour >= 12) {
    greetingImg = sun;
  }
  if (hour >= 18) {
    greetingImg = moon;
  }

  return (
    <header>
      <img src={greetingImg} />
      <h1>Hello</h1>
    </header>
  );
};

export default App;
