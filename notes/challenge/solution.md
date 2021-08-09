# Solution: Components

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating & Rendering the Component

1. In the components folder create a DiscoverArtistCard folder. Inside it create jsx and scss files.

2. Import react and create the function for each of your components - remember to export your component.

```jsx
// DiscoverArtistCard.jsx
import React from 'react'

const DiscoverArtistCard = () => {
    return (

    )
}

export default DiscoverArtistCard
```

3. Add scss styling.

```jsx
// DiscoverArtistCard.jsx

import React from "react";

import "./DiscoverArtistCard.scss";
```

4. In App.jsx, import the component you have created and Render it.

```jsx
// App.jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav";
import Button from "./components/Button";
import artist from "./data/artist";

import DiscoverArtistCard from "./components/DiscoverArtistCard/DiscoverArtistCard";

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

  return (
    <>
      <div className="app">
        <Nav />
        <header>
          <img src={greetingImg} />
          <h1>
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>
        <section className="buttonSection">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section>
        <DiscoverArtistCard />
      </div>
    </>
  );
};

export default App;
```

---

## Passing in Props

The component need two props from the artist object. Add the props to component and pass in the values in App.jsx.

```jsx
// App.jsx
<DiscoverArtistCard imgSrc={artist.strArtistThumb} title={artist.strArtist} />
```

---

## Using the props

The component now needs to use the props being passed in. You will need to pass props as a parameter. Now you can access the props object and select the values you need.

```jsx
// DiscoverArtistCard.jsx

const DiscoverArtistCard = props => {
  return (
    <div>
      <img src={props.imgSrc} />
      <div>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};
```

---

## Importing the Button & Giving it Props

You can import in the Button component and use it. You will need to give it the correct props.

```jsx
// DiscoverArtistCard.jsx
import React from "react";
import "./DiscoverArtistCard.scss";
import Button from "../Button";

const DiscoverArtistCard = props => {
  return (
    <div>
      <img src={props.imgSrc} />
      <div>
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtistCard;
```

---

## Finished component

```jsx
// DiscoverArtistCard.jsx
import React from "react";
import "./DiscoverArtistCard.scss";
import Button from "../Button/Button";

const DiscoverArtist = props => {
  return (
    <div className="discover-artist-card">
      <img src={props.imgSrc} className="discover-artist-card__img" alt={props.title} />
      <div className="discover-artist-card__content">
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
```

```scss
// DiscoverArtistCards.scss
@import "../../assets/sass/variables.scss";

.discover-artist-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  box-shadow: 0px 10px 20px rgba($color-black, 0.25);

  &__img {
    width: 100%;
  }

  &__content {
    position: absolute;
    z-index: 1;
    color: $color-white;
    font-size: 25px;
    bottom: 20px;
    left: 20px;

    & > * {
      margin: 10px 0;
    }
  }
  // OVERLAY
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($color-black, 0.5);
  }
}
```

