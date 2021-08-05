# Solution: Components

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating & Rendering the Component

1. In the components folder create a DiscoverArtist folder. Inside it create jsx, scss and index.js files.

![](./images/component.png)

2. Import react and create the function for each of your components - remember to export your component.

```jsx
// DiscoverArtist.jsx
import React from 'react'

const DiscoverArtist = () => {
    return (

    )
}

export default DiscoverArtist
```

3. Import and export your components in your index.js files.

```js
// index.js
import DiscoverArtist from "./DiscoverArtist";

export default DiscoverArtist;
```

4. Add scss styling.

```jsx
// DiscoverArtist.jsx

import React from "react";
// imports 'styles' from your sass file in order to use classes
import styles from "./DiscoverArtist.module.scss";
```

5. In App.jsx, import the component you have created and Render it.

```jsx
// App.jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav";
import Button from "./components/Button";
import artist from "./data/artist";

import DiscoverArtist from "./components/DiscoverArtist";

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
        <section className="button-section">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section>
        <DiscoverArtist />
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
<DiscoverArtist imgSrc={artist.strArtistThumb} title={artist.strArtist} />
```

---

## Using the props

The component now needs to use the props being passed in. You will need to pass props as a parameter. Now you can access the props object and select the values you need.

```jsx
// DiscoverArtist.jsx

const DiscoverArtist = props => {
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
// DiscoverArtist.jsx
import React from "react";
import styles from "./DiscoverArtist.module.scss";
import Button from "../Button";

const DiscoverArtist = props => {
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

export default DiscoverArtist;
```

---

## Finished component

```jsx
// DiscoverArtist.jsx
import React from "react";
import styles from "./DiscoverArtist.module.scss";
import Button from "../Button";

const DiscoverArtist = props => {
  return (
    <div className={styles.discover}>
      <img src={props.imgSrc} />
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );
};

export default DiscoverArtist;
```

```scss
// DiscoverArtist.modules.scss
@import "../../assets/sass/variables.module.scss";

.discover {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin: 50px;
  box-shadow: 0px 10px 20px rgba($color-black, 0.25);

  img {
    width: 100%;
  }

  .content {
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

@media (min-width: 992px) {
  .discover {
    grid-row: 3/4;
  }
}
```
