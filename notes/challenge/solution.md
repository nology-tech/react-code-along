# Solution: Set up and JSX

In VS Code right click on the solution.md file and click Open Preview.

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Adding JS into JSX

1. In App.jsx, inside the App function create a user object.

```jsx
// Inside the App function above the return statement
const user = {
  firstName: "John",
  lastName: "Doe",
};
```

2. In App.jsx use the values from the user object in your jsx.

```jsx
// Part of the return statement from the App function
<h1 className="greeting__heading">
  Good day! {user.firstName} {user.lastName}
</h1>
```

## Conditionally Render content

1. In App.jsx based on the time variable alter the message to correctly greet the user.

```jsx
// Inside the App function

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
  <header className="greeting">
    <img src={greetingImg} alt={greetingTime} className="greeting__img" />
    <h1 className="greeting__heading">
      Good {greetingTime} {user.firstName} {user.lastName}
    </h1>
  </header>
);
```

## Completed Component

```jsx
// App.jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

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
    <div className="app">
    <header className="greeting">
      <img src={greetingImg} alt={greetingTime} className="greeting__img"/>
      <h1 className="greeting__heading">
        Good {greetingTime} <br /> {user.firstName} {user.lastName}
      </h1>
    </header>
    <div/>
  );
};

export default App;
```
