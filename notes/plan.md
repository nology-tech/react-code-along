# Arrays

## Objectives

- Array iterator recap
- How can we make a mock a response from a API?
- How to work with arrays?
- Why each item needs a key?

---

## CA: Array Iterator recap

### Topics:

- How do map over an array?
- How do we filter an array?
- How do we sort an array?

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

## CA: How can we make a mock a response from a API?

In src in the data folder create an albums.js file. This will be the mock albums data for the components in the discography section. It is mocking a response from the audio db.

The data is on this [gist](https://gist.github.com/Charlie-robin/71222ddfbbd70e2de9e25097e2d0d665)

In App.jsx import the array of objects and log it to the console.

```jsx
// App.jsx
import albums from "./data/albums.js";
console.log(albums);
```

---

## CA: Creating the DiscographyCardList component.

Create a DiscographyCardList component with .jsx and .scss files.

```jsx
// DiscographyCardList.jsx
import React from "react";

import "./DiscographyCardList.scss";

const DiscographyCardList = () => {
  return <p>DiscographyCardList works</p>;
};

export default DiscographyCardList;
```

<details>
<summary>Completed DiscographyCardList.scss</summary>

```scss
// DiscographyCardList.scss
@import "../../assets/sass/variables.scss";

.card-list {
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
  .card-list {
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

Import the component into App.jsx. Add a section, h2, div and DiscographyCardList inside the app div.

```jsx
// App.jsx
// inside the app div
<section className="discography">
  <h2>Discography</h2>

  <div className="all-albums">
    <DiscographyCardList />
  </div>
</section>
```

Update the App.scss with the new styles below.

<details>
<summary>Completed App.scss</summary>

```scss
// App.scss
@import "./assets/sass/variables.scss";

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

## CA: How do you work with arrays?

Update the App.jsx and DiscographyCardList.jsx to accept and give these two props, title and albumsArr.
In the DiscographyCardList map over the array and create `<img>` tags for each of the strAlbumThumb keys from each album object from the array given. Render this to page.

```jsx
// App.jsx
<div className="all-albums">
  <DiscographyCardList title="Albums" albumsArr={albums} />
</div>
```

```jsx
// DiscographyCardList.jsx
const DiscographyCardList = props => {
  const { title, albumsArr } = props;
  console.log(albumsArr);
  const cardListJSX = albumsArr.map(album => <img className="card-list__img" src={album.strAlbumThumb} />);
  return (
    <>
      <h3>{title}</h3>
      <div className="card-list">{cardListJSX}</div>
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

Show the console and the error that is being displayed. Explain why each item will need its own unique key. Update the DiscographyCardList component to give each `<img>` its own key when you map over it.

```jsx
// DiscographyCardList.jsx
const cardListJSX = albumsArr.map((album, index) => (
  <img key={title + (index + 1)} className="card-list__img" src={album.strAlbumThumb} />
));
```

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
