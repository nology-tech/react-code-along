import "./App.scss";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import AllAlbums from "./pages/AlbumGallery/AlbumGallery";
import AlbumInfo from "./pages/AlbumInfo/AlbumInfo";

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
    <>
      <Router>
        <div className="app">
          <Nav userName={`${user.firstName} ${user.lastName}`} handleUserChange={handleUserChange} />

          <Switch>
            <Route path="/all">
              <AllAlbums albums={filteredAlbums} title={"All Albums"} />
            </Route>

            <Route path="/rating">
              <AllAlbums albums={highestRating} title={"Highest Rating"} />
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
    </>
  );
};

export default App;
