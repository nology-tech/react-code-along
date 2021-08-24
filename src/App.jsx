import "./App.scss";

import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

import albums from "./data/albums";
import artist from "./data/artist";
import { useState } from "react";

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
    <div className="app">
      <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} />
      <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
    </div>
  );
};

export default App;
