import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import AllAlbums from "./pages/AllAlbums/AllAlbums";

import albums from "./data/albums";
import artist from "./data/artist";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleUserChange = event => {
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    setUser({ ...user, [inputKey]: inputValue });
  };

  return (
    <>
      <Router>
        <div className="app">
          <Nav userName={`${user.firstName} ${user.lastName}`} handleUserChange={handleUserChange} />

          <Switch>
            <Route path="/all">
              <AllAlbums albums={albums} />
            </Route>

            <Route path="/">
              <Home user={user} albums={albums} artist={artist} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
