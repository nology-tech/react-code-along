# Solution: Components

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Adding State to the Component

1. Add the prop to the component and pass in the `artist.strBiographyEN` value.

```jsx
// App.jsx
<DiscoverArtistCard imgSrc={artist.strArtistThumb} title={artist.strArtist} text={artist.strBiographyEN} />
```

2. Add `{ useState }` to the import at the top of component. Initialize the state inside the component.

```jsx
// DiscoverArtistCard.jsx

import React, { useState } from "react";

// Inside the DiscoverArtistCard function.
const [showText, setShowText] = useState(false);
```

3. Write a function to set the state to whatever it is not. The example below uses the [Logical not operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT).

```jsx
// DiscoverArtistCard.jsx

// Inside the DiscoverArtistCard function.
const handleClick = () => {
  setShowText(!showText);
};
```

4. Add the onClick to the div set it to the function you had just written.

```jsx
// DiscoverArtistCard.jsx

<div onClick={handleClick}>
  <Button buttonText={"Find out more"} isSecondary={true} />
</div>
```

5. Add the image to the DiscoverArtistCard component.

```jsx
// DiscoverArtistCard.jsx

import whiteCross from "../../assets/images/white-cross.png";
```

6. I set two variables one is the initial JSX. This is the button and title which have been saved to a variable called buttonJSX. The JSX for the state change is the title text and cross, which have been saved to a variable called textJSX. In the return statement I check the state if it is meant to show the text it will show textJSX otherwise it will show buttonJSX. The JSX uses the given classNames from the SCSS file, both use the content class but buttonJSX adds the content--button class and textJSX adds the content--text class.

```jsx
// DiscoverArtistCard.jsx

const buttonJSX = (
  <div className="discover-artist-card__content discover-artist-card__content--button">
    <h3 className="discover-artist-card__heading">{title}</h3>
    <div onClick={handleClick}>
      <Button buttonText={"Find out more"} isSecondary={true} />
    </div>
  </div>
);

const textJSX = (
  <div className="discover-artist-card__content discover-artist-card__content--text">
    <img src={whiteCross} className="discover-artist-card__cross" onClick={handleClick} alt="Close text" />
    <h3 className="discover-artist-card__heading">{title}</h3>
    {text.split(".").map(sentence => (
      <p>{sentence + "."}</p>
    ))}
  </div>
);

return (
  <div className="discover-artist-card">
    <img src={imgSrc} className="discover-artist-card__img" alt={props.title} />
    {showText ? textJSX : buttonJSX}
  </div>
);
```

7. EXTENSION. Split the text using the "." to create an array of the sentences. Map over creating p tags for each of the sentences.

```jsx
const textJSX = (
  <div className="content content--text">
    <img src={whiteCross} className="discover-artist-card__cross" onClick={handleClick} alt="Close text" />
    <h3>{title}</h3>
    {text.split(".").map(sentence => (
      <p>{sentence + "."}</p>
    ))}
  </div>
);
```

---

## Completed Component

```jsx
// DiscoverArtistCard.jsx
import React, { useState } from "react";
import "./DiscoverArtistCard.scss";

import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";

const DiscoverArtistCard = props => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="discover-artist-card__content discover-artist-card__content--button">
      <h3 className="discover-artist-card__heading">{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="discover-artist-card__content discover-artist-card__content--text">
      <img src={whiteCross} className="discover-artist-card__cross" onClick={handleClick} alt="Close text" />
      <h3 className="discover-artist-card__heading">{title}</h3>
      {text.split(".").map(sentence => (
        <p>{sentence + "."}</p>
      ))}
    </div>
  );

  return (
    <div className="discover-artist-card">
      <img src={imgSrc} className="discover-artist-card__img" alt={props.title} />
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

export default DiscoverArtistCard;
```
