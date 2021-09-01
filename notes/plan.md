# Arrays

This branch is focused on getting the students use to using data to create dynamic Components.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/s/Nologyio/ES56ZohqZQJKufEBYxR2MQgBjM6arDN99toib0k8t4MQPw?e=IhVwdg)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/04-arrays/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- Array iterator recap
- How can we make a mock a response from a API?
- How to work with arrays?
- Why each item needs a key?

---

## Array Iterator recap

Do a recap of using .map(), .filter() and .sort() array methods with an array of objects. Mention you can use map to create Components or JSX from arrays.

A example is below but feel free to improvise this.

```jsx
// App.jsx
const coaches = [
  { name: "andy", score: 80 },
  { name: "matt", score: 40 },
  { name: "sam", score: 30 },
];

// .map()
const coachesJSX = coaches.map(coach => (
  <p>
    `I am ${coach.name} and I scored {coach.score}`
  </p>
));

// .filter()
const filteredCoaches = coaches.filter(coach => coach.score > 30);

// .sort()
// coaches.sort((a, b) => b.score - a.score);
// ^^ will mutate original array
const sortedCoaches = [...coaches].sort((a, b) => b.score - a.score);
```

---

## How can we make a mock a response from a API?

In src in the data folder create an albums.js file. This will be the mock albums data for the components in the discography section. It is mocking a response from the audio db.

The data is on this [gist](https://gist.github.com/Charlie-robin/71222ddfbbd70e2de9e25097e2d0d665)

In App.jsx import the array of objects and log it to the console.

```jsx
// App.jsx
import albums from "./data/albums.js";
console.log(albums);
```

---

## Creating the AlbumTiles component.

Create a AlbumTiles component with .jsx and .scss files.

```jsx
// AlbumTiles.jsx
import React from "react";

import "./AlbumTiles.scss";

const AlbumTiles = () => {
  return <p>AlbumTiles works</p>;
};

export default AlbumTiles;
```

<details>
<summary>Completed AlbumTiles.scss</summary>

```scss
// AlbumTiles.scss
@use "../../assets/sass/_variables.scss" as *;

.album-tiles {
  width: 100%;
  flex: 1;
  display: flex;
  overflow-x: auto;

  &__img {
    display: block;
    width: 200px;
    margin: 10px 20px;
    margin-left: 0;
    flex: auto;
    flex-shrink: 0;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba($color-black, 0.25);
  }
}

@media (min-width: 992px) {
  .album-tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 20px;

    &__img {
      margin: 0;
      width: 100%;
    }
  }
}
```

</details>

<br/>

Import the component into App.jsx. Add a section, h2, div and AlbumTiles inside the app div.

```jsx
// App.jsx
// inside the app div
<section className="discography">
  <h2>Discography</h2>

  <div className="all-albums">
    <AlbumTiles />
  </div>
</section>
```

Update the App.scss with the new styles below.

<details>
<summary>Completed App.scss</summary>

```scss
// App.scss
@use "./assets/sass/_variables.scss" as *;

.app {
  color: $color-black;

  & > * {
    padding: 0 50px;
  }

  .greeting {
    text-align: center;

    &__heading {
      color: $color-black;
    }

    & > * {
      margin: 20px;
    }
  }

  .button-section {
    display: flex;
    margin: 20px auto;
    width: fit-content;

    & > * {
      margin: 0 10px;
    }
  }

  .discography {
    padding: 0;

    .all-albums {
      background-color: $color-primary;
      padding: 10px 50px 20px 50px;
    }

    & > * {
      padding: 0px 50px;
    }
  }
}

@media (min-width: 992px) {
  .app {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 25px 100px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content;

    & > * {
      padding: 0;
    }

    .greeting {
      text-align: left;
      display: flex;
      grid-column: 1/ -1;

      &__img {
        height: 100px;
      }
    }

    .button-section {
      display: none;
    }

    .discover {
      grid-row: 3/4;
    }

    .discography {
      grid-row: 4/5;
      grid-column: 1/ -1;
      border-radius: 15px;
      display: grid;
      gap: 25px 100px;
      grid-template-columns: repeat(2, 1fr);

      .all-albums {
        border-radius: 15px;
        height: fit-content;
      }

      &__heading {
        grid-column: 1 / -1;
      }
    }
  }
}
```

</details>

---

## How do you work with arrays?

Update the App.jsx and AlbumTiles.jsx to accept and give these two props, title and albumsArr.
In the AlbumTiles map over the array and create `<img>` tags for each of the strAlbumThumb keys from each album object from the array given. Render this to page.

```jsx
// App.jsx
<div className="all-albums">
  <AlbumTiles title="Albums" albumsArr={albums} />
</div>
```

```jsx
// AlbumTiles.jsx
const AlbumTiles = props => {
  const { title, albumsArr } = props;
  console.log(albumsArr);
  const cardListJSX = albumsArr.map(album => (
    <img className="album-tiles__img" src={album.strAlbumThumb} alt={album.strAlbum} />
  ));
  return (
    <>
      <h3>{title}</h3>
      <div className="album-tiles">{cardListJSX}</div>
    </>
  );
};
```

Some of the album objects from the albumsArr file do not have valid strAlbumThumb keys. We now need to remove them before we render them. We also have a lot of albums to display as well perhaps we limit it to 9 per component. Lets store the filtered and sliced array as a variable and pass that as props to the component.

```jsx
// App.jsx
const filteredAlbums = albums.filter(album => album.strAlbumThumb).slice(0, 9);
```

---

## Why each item needs a key?

Show the console and the error that is being displayed. Explain why each item will need its own unique key. Update the AlbumTiles component to give each `<img>` its own key when you map over it.

```jsx
// AlbumTiles.jsx
const cardListJSX = albumsArr.map((album, index) => (
  <img key={title + (index + 1)} className="album-tiles__img" src={album.strAlbumThumb} alt={album.strAlbum} />
));
```

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
