# Props

This branch is focused on getting the student use to passing props and using props inside Components.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/r/sites/Nologyio/_layouts/15/Doc.aspx?sourcedoc=%7BDD89A706-7410-4186-ABED-5AF8A41A756D%7D&file=React%20Props.pptx&action=edit&mobileredirect=true&cid=4a908d2a-9685-413d-9462-bc580a3b5dad)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/03-props/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- What are Props and How do we use them?
- How can we make a mock data file?
- What is Object Destructuring?

---

## What are Props and How do we use them?

Lets refactor our two buttons into one Button component that takes in props. Delete the two buttons and create a new one.

```jsx
// Button.jsx
import "./Button.scss";

const Button = (props) => {
  let buttonStyle = "button";

  return <button className={buttonStyle}>Button works</button>;
};

export default Button;
```

```scss
// Button.scss
@use "../../assets/sass/_variables.scss" as *;

.button {
  min-width: 80px;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
}
```

1. Passing Props into the component

```jsx
// App.jsx
<Button buttonText={"This is being passed in"} />
```

2.  Log props to the console and then use props in the component.

```jsx
// Button.jsx
const Button = (props) => {
  console.log(props);
  console.log(props.buttonText);
  const buttonText = props.buttonText;

  let buttonStyle = "button";

  return <button className={buttonStyle}>{buttonText}</button>;
};
```

3.  Lets pass in a conditional prop

```jsx
// App.jsx
<Button buttonText={"This is being passed in"} isSecondary={true} />
```

4. Lets use this to do some conditional styling. If isSecondary is true lets add the secondary class to the component.

```scss
// Button.scss
.primary {
  background-color: transparent;
  border: 2px solid $color-primary;
}

.secondary {
  background-color: $color-secondary;
}
```

```jsx
// Button.jsx
let buttonStyle = "button";

if (props.isSecondary) {
  buttonStyle += " secondary";
} else {
  buttonStyle += " primary";
}

// This could be simplified using a inline turnery statement.
// let buttonStyle = props.isSecondary ? "button secondary" : "button primary";
```

---

## How can we make a mock data file?

In src create a data folder. In the folder create a artist.js file. This will be the mock data for the challenge component. It is mocking a response from the audio db.

The data is on this [gist](https://gist.github.com/Charlie-robin/68461faec41456c5c05bd529ae167ba1). You can get them to download it or copy and paste it.

Add it to the artist.js file.

In App.jsx import the object and log it and some of its keys to the console.

```jsx
// App.jsx
import artist from "./data/artist.js";

console.log(artist);
console.log(artist.strArtist);
```

---

## Move onto Challenges

**Once the Challenge is completed there is a refactoring exercise using object destructuring**

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---

## Object Destructuring

Lets refactor our components with object destructuring.

[MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```jsx
// Button.jsx
// left hand side variables you are unpacking
// right hand side is the object / source of values
const { buttonText, isSecondary } = props;
```

```jsx
// ArtistTile
const { imgSrc, title } = props;
```
