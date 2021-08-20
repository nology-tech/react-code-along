# Solution: Routing

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating a route and Linking to the albums/rated page

1. Add the Link Component to the navMenu component and set up the to prop to equal "/albums/rated".

```jsx
// NavMenu.jsx

<Link className="nav-menu__item" to="/albums/rated" onClick={toggleNav}>
  Rated Albums
</Link>
```

2. Add a new Route to the Switch component inside App.jsx. Set the path prop to "/albums/rated".

3. Inside the Route you have just created add the AlbumGallery container and give it the correct props. The title will be "Rated Albums", the albumsArr will be the highestRating array. Below are two examples of the Switch component. The bottom one uses the exact prop on the Route component.

```jsx
// App.jsx

// These need to be in the correct order.
<Switch>
  <Route path="/albums/rated">
    <AlbumGallery albumsArr={highestRating} title={"Rated Albums"} />
  </Route>

  <Route path="/albums">
    <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
  </Route>

  <Route path="/">
    <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
  </Route>
</Switch>
```

```jsx
// App.jsx

// Using the exact prop means it will only go to /albums if it is exactly that. Meaning the order of Route components can be changed.
<Switch>
  <Route exact path="/albums">
    <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
  </Route>

  <Route path="/albums/rated">
    <AlbumGallery albumsArr={highestRating} title={"Rated Albums"} />
  </Route>

  <Route path="/">
    <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
  </Route>
</Switch>
```

---

## Using Query Params to populate the AlbumInfo component

1. Loop through the albumsArr and use the albumId to find the correct album object. There are lots of ways to do this the example below is not the only way.

```jsx
// AlbumInfo.jsx

const currentAlbum = albumsArr.find(album => album.idAlbum === albumId);
```

2. Now you have found the correct album object you need to use its values to populate the JSX. You could use destructuring to get the values you need.

```jsx
// AlbumInfo.jsx

const { strAlbumThumb, strAlbum, strMood, intYearReleased, strGenre, intScore, strDescriptionEN } = currentAlbum;

return (
  <article className="album-info">
    <div className="album-info__banner">
      <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--first" />
    </div>
    <div className="album-info__content">
      <h2 className="album-info__heading">{strAlbum}</h2>
      <p>{strDescriptionEN}</p>
      <h2 className="album-info__heading">Facts</h2>
      <ul className="album-info__facts">
        <li>Mood : {strMood} </li>
        <li>Released : {intYearReleased} </li>
        <li>Genre : {strGenre} </li>
        <li>Score : {intScore} </li>
      </ul>
    </div>
    <div className="album-info__banner">
      <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--last" />
    </div>
  </article>
);
```

3. To shorten the text over 300 characters and end on a sentence I used the [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method. You can give it two parameters the searchValue and fromIndex. So by giving it "." and 300 it will look for the first "." after 300 characters. I save this result to a variable and add 1 so it includes the final ".". I then use the substring method to shorten the string from 0 to the lastSentenceIndex. I save this to a variable which I use in the JSX.

```jsx
// App.jsx

const lastSentenceIndex = strDescriptionEN.indexOf(".", 300) + 1;
const shortenedText = strDescriptionEN.substring(0, lastSentenceIndex);
```

4. The reason we have a bug is that on the album object with the id of 2185705 it does not have the strDescriptionEN key. If you try and use methods on something that is undefined or null you will crash your application.

To avoid this we can use both Optional Chaining and Nullish Coalescing.

- By putting ?. in front of the method it returns undefined rather then causes a error if it can not use the method.
- By putting ?? it will return what is on the right hand side if it is truthy and what is on the left if it is null or undefined.

You could use || to do this but this can run into problems with numbers.

```jsx
// App.jsx

const lastSentenceIndex = strDescriptionEN?.indexOf(".", 300) + 1;
const shortenedText = strDescriptionEN?.substring(0, lastSentenceIndex) ?? "No description given.";
```

---

<details>
<summary>Completed AlbumInfo.jsx</summary>

```jsx
// AlbumInfo.jsx

import React from "react";

import "./AlbumInfo.scss";

import { useParams } from "react-router";

const AlbumInfo = props => {
  const { albumsArr } = props;
  const { albumId } = useParams();

  const currentAlbum = albumsArr.find(album => album.idAlbum === albumId);
  const { strAlbumThumb, strAlbum, strMood, intYearReleased, strGenre, intScore, strDescriptionEN } = currentAlbum;

  const lastSentenceIndex = strDescriptionEN?.indexOf(".", 300) + 1;
  const shortenedText = strDescriptionEN?.substring(0, lastSentenceIndex) ?? "No description given.";

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{strAlbum}</h2>
        <p>{shortenedText}</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {strMood} </li>
          <li>Released : {intYearReleased} </li>
          <li>Genre : {strGenre} </li>
          <li>Score : {intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img src={strAlbumThumb} alt={strAlbum} className="album-info__img album-info__img--last" />
      </div>
    </article>
  );
};

export default AlbumInfo;
```

</details>
