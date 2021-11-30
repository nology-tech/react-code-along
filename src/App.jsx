import "./App.scss";

import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import AlbumGallery from "./containers/AlbumGallery/AlbumGallery";
import AlbumInfo from "./containers/AlbumInfo/AlbumInfo";

import albums from "./data/albums";
import artist from "./data/artist";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

        <Routes>
          <Route
            path="/"
            element={<Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />}
          />
          <Route
            path="/albums"
            element={<AlbumGallery key="albums" albumsArr={filteredAlbums} title={"All Albums"} />}
          />
          <Route path="/album/:albumId" element={<AlbumInfo albumsArr={filteredAlbums} />} />
          <Route
            path="/albums/rated"
            element={<AlbumGallery key="rated" albumsArr={highestRating} title={"Rated Albums"} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
