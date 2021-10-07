# Routing

This branch is focused on getting the students to implement routing in the project using the [React Router](https://reactrouter.com/web/guides/quick-start).

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/s/Nologyio/ES3MsNqMtj9OuIvvV9pDDpIBHxCGKmY5WWbHCKaQdC5BTA?e=2EDOGH)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/07-routing/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- Why have we refactored the project?
- What is a SPA and how do we add react-router to our project?
- How can we implement routing in our Application?
- How can we use queryParams from the url?

---

## Why have we refactored the project?

The project is growing and we are going to introduce multiple pages to it.

The previous content from the App has been moved into the Home container. The App is now going to be responsible for navigating around the application rather then what is being shown. We will leave this to the containers.

The user state, artist and album data is needed in multiple places in the project. This is why it is being kept in the app so it can be passed with props.

---

## What is a SPA and how do we add react-router to our project?

A SPA is a web application or website that dynamically rewrites the current web page instead loading entire new pages.

Show them [React Router](https://reactrouter.com/web/guides/quick-start) this is the package we will use to implement routing in our project. There are others.

Highlight that the React router doc's are easy to follow.

To add it to the project run.

```bash
npm install react-router-dom
```

---

## Part 1: How can we implement routing in our Application?

Once the package has been installed we can use the components to add routing.

In App.jsx import the following components.

_We are using `BrowserRouter as Router` to be consistent with the react router docs._

```jsx
// App.jsx

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
```

Wrap the entire application inside the Router component. If you want to use routing it has to be inside this component.

Add the Switch component below the Nav. Inside the Switch use the Route component. Inside the Route add the Home component.

Add the path prop to Route and set the value to "/". This is going to be the default path. If it does not find a route it will take us to this page.

```jsx
// App.jsx

return (
  <Router>
    <div className="app">
      <Nav userName={`${user.firstName} ${user.lastName}`} handleUserChange={handleUserChange} />

      <Switch>
        <Route path="/">
          <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
        </Route>
      </Switch>
    </div>
  </Router>
);
```

Thats setting up the path now we need to link to it.

In the NavMenu import the Link, replace `<p className="nav-menu__item" >Home</p>` with the Link component.

Add the to prop to the Link and set the value to "/". Add the toggleNav to run onClick to hide the nav once the link has been clicked.

```jsx
// NavMenu.jsx

import { Link } from "react-router-dom";

// In the return NavMenu.jsx
<Link className="nav-menu__item" to="/" onClick={toggleNav}>
  Home
</Link>;
```

---

## Creating AlbumGallery container

This is going to be a reuseable page to link to. It takes a title and albumsArr as props.

It filters the albumsArr remove any albums without img URLs , it then maps over to create a array of the img URLS. This will be given to the Carousel component.

In src/containers create the AlbumGallery folder and jsx and scss files.

The completed files are below;

<details>
<summary>AlbumGallery.jsx</summary>

```jsx
// AlbumGallery.jsx

import React from "react";

import "./AlbumGallery.scss";

import Carousel from "../../components/Carousel/Carousel";

const AlbumGallery = props => {
  const { albumsArr, title } = props;

  const imagesArr = albumsArr.filter(album => album.strAlbumThumb).map(album => album.strAlbumThumb);

  return (
    <section className="album-gallery">
      <h1 className="album-gallery__heading">{title}</h1>

      <div className="album-gallery__carousel">
        <Carousel imagesArr={imagesArr} />
      </div>
    </section>
  );
};

export default AlbumGallery;
```

</details>

<details>
<summary>AlbumGallery.scss</summary>

```scss
// AlbumGallery.scss

.album-gallery {
  &__heading {
    padding: 0 50px;
    font-size: 30px;
    text-align: center;
  }
}

@media (min-width: 992px) {
  .album-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px 50px;
    padding: 0 50px;

    &__heading {
      grid-column: 1 / -1;
      padding: 0;
    }

    &__carousel {
      width: 100%;
      grid-column: 2/4;
    }
  }
}
```

</details>

---

## Part 2: How can we implement routing in our Application?

It is time to hook up our new page.

In App.jsx import in the AlbumGallery container. Add a new Route to the Switch component. Set the path prop on the Route to "/albums".

Inside the Route Add in the AlbumGallery component and give it the albumsArr and title props it needs.

```jsx
// App.jsx

<Switch>
  <Route path="/albums">
    <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
  </Route>

  <Route path="/">
    <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
  </Route>
</Switch>
```

In the NavMenu add a new link to take you to that page.

```jsx
// NavMenu.jsx

<Link className="nav-menu__item" to="/albums" onClick={toggleNav}>
  All Albums
</Link>
```

That should all be hooked up.

Demonstrate what happens if the Route with the `path="/"` is the first in the Switch as this will probably catch them out.

```jsx
// App.jsx

<Switch>
  <Route path="/">
    <Home user={user} unsortedAlbums={filteredAlbums} sortedAlbums={highestRating} artist={artist} />
  </Route>

  <Route path="/albums">
    <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
  </Route>
</Switch>
```

---

## Move onto Challenges

**Once the Challenge is completed there is a code exploring query params**
**The second challenge is for after you cover query params**

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---

## How can we use Query Params from the URL?

Query parameters are a defined set of parameters at the end of a URL. They are used to help define individual content for a page.

Lets update the AlbumTiles component. We want to make it so when you click on the image of the album it takes you to a page with more information about that album.

Import the Link component.

In the AlbumTiles.jsx update the cardListJSX variable. Now it should wrap the `<img/>` with the Link component.

The to prop on the Link is going to go to /album/idAlbum.

The idAlbum is going to be the id from each of the albums objects.

You will need to move the key prop to the Link component.

```jsx
// AlbumTiles.jsx

const cardListJSX = albumsArr.map((album, index) => (
  <Link to={`/album/${album.idAlbum}`} key={title + (index + 1)}>
    <img className="album-tiles__img" src={album.strAlbumThumb} alt={album.strAlbum} />
  </Link>
));
```

## Creating the AlbumInfo container

The AlbumInfo container will get take the array of albums and use the id from the query params to get the object it needs to populate the page with the correct information.

Create an AlbumInfo folder, jsx nd scss files. The starter code is below.

<details>
<summary>AlbumInfo.jsx</summary>

```jsx
// AlbumInfo.jsx
import React from "react";

import "./AlbumInfo.scss";

const AlbumInfo = props => {
  const { albumsArr } = props;

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--first" />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">ALBUM-TITLE</h2>
        <p>ALBUM-TEXT</p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : ALBUM-MOOD </li>
          <li>Released : ALBUM-YEAR-RELEASED </li>
          <li>Genre : ALBUM-GENRE </li>
          <li>Score : ALBUM-SCORE </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last"/>
      </div>
    </article>
  );
};

export default AlbumInfo;
```

</details>

<details>
<summary>AlbumInfo.scss</summary>

```scss
// AlbumInfo.scss
@use "../../assets/sass/variables" as *;

.album-info {
  &__banner {
    overflow: hidden;
    background-color: $color-black;
    height: 35vh;
    position: relative;
  }

  &__img {
    border-radius: 15px;
    width: calc(100% - 100px);
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &--first {
      top: 50px;
    }

    &--last {
      bottom: 50px;
    }
  }

  &__content {
    padding: 10px 50px;
  }

  &__facts {
    list-style-type: none;
    padding: 0;
  }

  &__heading {
    font-size: 30px;
    width: fit-content;
    &:after {
      content: "";
      display: block;
      height: 5px;
      width: 100%;
      background-color: $color-primary;
      border-radius: 15px;
    }
  }
}

@media (min-width: 992px) {
  .album-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 15px;
    overflow: hidden;
    margin: 50px 50px;
    box-shadow: 0px 10px 20px rgba($color-black, 0.25);
    min-height: 60vh;

    &__banner {
      height: 100%;
      background-color: unset;
    }

    &__img {
      width: unset;
      height: 100%;
      left: unset;
      transform: unset;
      top: 0;
      opacity: 0.8;

      &--first {
        left: 0;
      }

      &--last {
        right: 0;
      }
    }

    &__heading {
      margin: 0 auto;
    }
  }
}
```

</details>
<br/>

Import the useParams hook in the container. Inside the function use the useParam hook, destruct it and log the result to the console.

_You wont see anything yet as you need to set up the route in App_

```jsx
// AlbumInfo.jsx

import { useParams } from "react-router";

const { albumId } = useParams();
console.log(albumId);
```

In App.jsx inside the Switch set up a new route to the AlbumInfo container. Set the path to go to `/album/:albumId`. :albumId represents the query param.

```jsx
// AlbumInfo.jsx

<Route path="/album/:albumId">
  <AlbumInfo albumsArr={filteredAlbums} />
</Route>
```

Demonstrate the query param logged to the console when you click on a album. It is now down to use the id to find the album and use the data to populate the page.

Go to the second challenge on the challenge.md.

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
