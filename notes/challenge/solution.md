# Solution: Functions as Props

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating a route and Linking to the rated-albums page

1. Add the Link Component to the navMenu component and set up the to prop to equal "/rated-albums".

```jsx
// NavMenu.jsx

<Link className="nav-menu__item" to="/rated-albums" onClick={toggleNav}>
  Rated Albums
</Link>
```

2. Add a new Route to the Switch component inside App.jsx. Set the path prop to "/rated-albums".

3. Inside the Route you have just created add the AlbumGallery container and give it the correct props. The title will be "Rated Albums", th albumsArr will be the highestRating array.

```jsx
// App.jsx

<Route path="/rated-albums">
  <AlbumGallery albumsArr={highestRating} title={"Rated Albums"} />
</Route>
```
