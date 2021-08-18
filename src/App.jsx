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

  const handleUserChange = event => {
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    setUser({ ...user, [inputKey]: inputValue });
  };

  const filteredAlbums = albums.filter(album => album.strAlbumThumb);

  const highestRating = albums.filter(album => album.intScore).sort((a, b) => b.intScore - a.intScore);

  return (
    <Router>
      <div className="app">
        <Nav userName={`${user.firstName} ${user.lastName}`} handleUserChange={handleUserChange} />

        <Switch>
          <Route path="/all-albums">
            <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
          </Route>

          <Route path="/rated-albums">
            <AlbumGallery albumsArr={highestRating} title={"Rated Albums"} />
          </Route>

          <Route path="/album-info/:albumId">
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
