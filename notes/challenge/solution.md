# Solution: Arrays

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

1. Create a div and add it to the discography section. Inside the div use the component and pass in the correct props.

```jsx
// App.jsx
<div className="highest-rated">
  <AlbumTiles title="Highest Rated" />
</div>
```

2. Sort the array based on the intScore key on each of the objects.

```jsx
// App.jsx
const highestRating = albums.sort((a, b) => b.intScore - a.intScore);
```

3. Slice the array so it only has 9 albums in it and pass it to the component

```jsx
// App.jsx
const highestRating = albums.sort((a, b) => b.intScore - a.intScore).slice(0, 9);

// In return statement
<AlbumTiles title="Highest Rated" albumsArr={highestRating} />;
```

4. This is happening because the sort() method mutates the original array. Both map() and filter() methods will return you a new array sort does not. We could use the `[...]` spread operator to clone the array or we can filter the array before we sort it.

5. Filter the array before you sort it, based on if it has a intScore value.

```jsx
// App.jsx
const highestRating = albums
  .filter(album => album.intScore)
  .sort((a, b) => b.intScore - a.intScore)
  .slice(0, 9);
```

## Completed App.jsx

```jsx
// App.jsx

import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import ArtistTile from "./components/ArtistTile/ArtistTile";
import AlbumTiles from "./components/AlbumTiles/AlbumTiles";

import albums from "./albumsArr/albums";
import artist from "./albumsArr/artist";

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

        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>

        <section className="button-section">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section>

        <section className="discover">
          <h2>Discover</h2>
          <ArtistTile imgSrc={artist.strArtistThumb} title={artist.strArtist} text={artist.strBiographyEN} />
        </section>

        <section className="discography">
          <h2 className="discography__heading">Discography</h2>

          <div className="all-albums">
            <AlbumTiles title="Albums" albumsArr={filteredAlbums} />
          </div>

          <div className="highest-rated">
            <AlbumTiles title="Highest Rated" albumsArr={highestRating} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
```
