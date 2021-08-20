import "./App.scss";

import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import AlbumGallery from "./containers/AlbumGallery/AlbumGallery";
import AlbumInfo from "./containers/AlbumInfo/AlbumInfo";

import albums from "./data/albums";
import artist from "./data/artist";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleSubmit = event => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };

  const filteredAlbums = albums.filter(album => album.strAlbumThumb);

  const highestRating = albums.filter(album => album.intScore).sort((a, b) => b.intScore - a.intScore);

  return (
    <Router>
      <div className="app">
        <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} />

        <Switch>
          <Route path="/albums/rated">
            <AlbumGallery albumsArr={highestRating} title={"Rated Albums"} />
          </Route>

          <Route path="/albums">
            <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
          </Route>

          <Route path="/album/:albumId">
            <AlbumInfo albumsArr={filteredAlbums} />
          </Route>

          <Route path="/">
            <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
