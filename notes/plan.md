# Functions as Props

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

In App.jsx import in the AlbumGallery container. Add a new Route to the Switch component. Set the path prop on the Route to "/all-albums".

Inside the Route Add in the AlbumGallery component and give it the albumsArr and title props it needs.

```jsx
// App.jsx

<Switch>
  <Route path="/all-albums">
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

<Link className="nav-menu__item" to="/all-albums" onClick={toggleNav}>
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

  <Route path="/all-albums">
    <AlbumGallery albumsArr={filteredAlbums} title={"All Albums"} />
  </Route>
</Switch>
```

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
