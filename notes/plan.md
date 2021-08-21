# State

This branch is focused on getting the students to implement the useState() hook, with examples of how you can use it.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/r/sites/Nologyio/_layouts/15/Doc.aspx?sourcedoc=%7BB51F111B-CDB7-48DD-B180-FA69D0F4CDFD%7D&file=React%20State.pptx&action=edit&mobileredirect=true&cid=2138b020-1689-44d4-85ea-f389edb49614)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/05-state/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- How can we use State to conditionally show some JSX?
- How can we use State to Increment and Decrement a Counter?
- How can we apply this to a Component?

---

## Creating the Carousel the Component

Create a Component called Carousel. This is going to accept a prop called imagesArr.

Copy the JSX and SCSS files below.

<details>
<summary>Carousel.jsx</summary>

```jsx
// Carousel.jsx
import React from "react";

import "./Carousel.scss";

const Carousel = props => {
  const { imagesArr } = props;

  return (
    <div className="carousel">
      <p>Carousel works</p>
    </div>
  );
};

export default Carousel;
```

</details>

<details>
<summary>Carousel.scss</summary>

```scss
// Carousel.scss
@use "../../assets/sass/_variables.scss" as *;

.carousel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: $color-secondary;

  &__image {
    box-shadow: 0px 10px 20px rgba($color-black, 0.25);
    display: block;
    width: 80%;
    border-radius: 15px;
    margin: 0 10px;
  }

  &__arrow {
    display: block;
    height: 30px;

    &:hover {
      cursor: pointer;
    }
  }
}

@media (min-width: 992px) {
  .carousel {
    position: relative;
    flex-grow: 1;
    padding: 0;
    display: block;
    background-color: unset;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }

    &__arrow {
      z-index: 2;
      position: absolute;
      bottom: 20px;
      background-color: rgba($color-white, 0.4);
      box-shadow: 0px 10px 20px rgba($color-black, 0.6);
      padding: 20px;
      border-radius: 15px;

      &:hover {
        background-color: rgba($color-white, 0.8);
      }

      &--left {
        left: 20px;
      }

      &--right {
        right: 20px;
      }
    }
  }
}
```

</details>

In App.jsx import in the Carousel and add it to the the return statement.

```jsx
// App.jsx
  <section className="gallery">
    <h2 className="gallery__heading">Gallery</h2>
    <Carousel imagesArr={} />
  </section>
```

You will need to update the App.scss with the new styles below.

<details>
<summary>App.scss</summary>

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

  .gallery {
    padding: 0;

    &__heading {
      padding: 0 50px;
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
        padding: 0;
        grid-column: 1 / -1;
      }
    }

    .gallery {
      grid-row: 3 / 4;
      display: flex;
      flex-direction: column;
      padding-right: 50px;

      &__heading {
        padding: 0;
      }
    }
  }
}
```

</details>

In the data folder on the artist.js object it has these keys strArtistFanart, strArtistFanart2, strArtistFanart3 and strArtistFanart4. In App.jsx use these keys to create an array of images for our component to use. Pass this array to the Carousel as the `imageArr` prop.

```jsx
// App.js
const galleryImages = [
  artist.strArtistFanart,
  artist.strArtistFanart2,
  artist.strArtistFanart3,
  artist.strArtistFanart4,
];
```

---

## How can we use State to conditionally show some JSX?

To complete the challenge they need to know how to conditionally show a item.

Import useState and set it up to conditionally show one image based on a boolean state. Add a function to change the state and add to run on the click of a button.

```jsx
// Carousel.jsx
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="carousel">
      <button onClick={handleClick}>Toggle Image</button>
      {showImage && <img src={imagesArr[0]} alt="" className="carousel__image" />}
    </div>
  );
};
```

---

## How can we use State to Increment and Decrement a Counter?

Build a simple counter to show how you can have multiple functions that update the state. We can later turn it into the functionality of our Carousel.

Display the state, have two buttons and one function to increment it and another to decrement it.

```jsx
// Carousel.jsx
const Carousel = props => {
  const { imagesArr } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="carousel">
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
```

---

## How can we apply this to a Component?

Take this functionality and finish the Carousel component. You will need to import the two arrows from src/assets/images folder.

```jsx
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
```

Update the jsx to match below. You will have two arrows to update the counter.

The carousel\_\_image will use the urls from imagesArr for the src. The counter is the index for the imagesArr. When you update the counter the image url will change.

```jsx
// Carousel.jsx
return (
  <div className="carousel">
    <img src={leftArrow} alt="" onClick={handleDecrement} className="carousel__arrow carousel__arrow--left" />
    <img src={imagesArr[counter]} alt="" className="carousel__image" />
    <img src={rightArrow} alt="" onClick={handleIncrement} className="carousel__arrow carousel__arrow--right" />
  </div>
);
```

This should be enough to get the Carousel cycling through the images. You will be able to go out of bounds though.

Update the logic of the two functions to check counter before it sets the state. If it is going to go out of bounds set it to the start or the end to create a loop.

```jsx
// Carousel.jsx
const handleIncrement = () => {
  if (counter === imagesArr.length - 1) {
    setCounter(0);
  } else {
    setCounter(counter + 1);
  }
};

const handleDecrement = () => {
  if (counter === 0) {
    setCounter(imagesArr.length - 1);
  } else {
    setCounter(counter - 1);
  }
};
```

The jsx for the finished component is below.

  <details>
  <summary>Carousel.jsx</summary>

```jsx
import React, { useState } from "react";

import "./Carousel.scss";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

const Carousel = props => {
  const { imagesArr } = props;
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === imagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(imagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={handleDecrement}
        className="carousel__arrow carousel__arrow--left"
      />
      <img src={imagesArr[counter]} alt="" className="carousel__image" />
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={handleIncrement}
        className="carousel__arrow carousel__arrow--right"
      />
    </div>
  );
};

export default Carousel;
```

 </details>

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
