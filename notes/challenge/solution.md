# Solution: Functions as Props

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating the NavMenu & Using Functions as Props

1. Create the NavMenu. It imports and uses the black cross img. It uses the items given.

```jsx
// NavMenu.jsx

import React from "react";

import "./NavMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

const NavMenu = props => {
  return (
    <div className="nav-menu">
      <img src={blackCross} alt="Close menu" className="nav-menu__cross" />
      <p className="nav-menu__item">Discover</p>
      <p className="nav-menu__item">Discography</p>
      <p className="nav-menu__item">Gallery</p>
      <p className="nav-menu__item">Explore</p>
    </div>
  );
};

export default NavMenu;
```

2. Add `{ useState }` to the import at the top of component. Initialize the state inside the component.

```jsx
// Nav.jsx

import React, { useState } from "react";

// Inside the Nav function.
const [showNav, setShowNav] = useState(false);

// Inside the Nav return statement.
{
  showNav && <NavMenu />;
}
```

3. Write a function to set the state to whatever it is not. The example below uses the [Logical not operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT).

```jsx
// Nav.jsx

// Inside the Nav function.
const toggleNav = () => {
  setShowNav(!showNav);
};

// Inside the Nav return statement.
{
  showNav && <NavMenu toggleNav={toggleNav} />;
}
```

4. In the NavMenu get the function as props and hook it up to run when the black cross is clicked.

```jsx
// NavMenu.jsx

// Inside the NavMenu function.
const { toggleNav } = props;

// Inside the NavMenu return statement.
<img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />;
```

## Completed Component

<details>
<summary>NavMenu.jsx</summary>

```jsx
import React from "react";

import "./NavMenu.scss";

import blackCross from "../../assets/images/black-cross.png";

const NavMenu = props => {
  const { toggleNav } = props;

  return (
    <div className="nav-menu">
      <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />
      <p className="nav-menu__item">Discover</p>
      <p className="nav-menu__item">Discography</p>
      <p className="nav-menu__item">Gallery</p>
      <p className="nav-menu__item">Explore</p>
    </div>
  );
};

export default NavMenu;
```

</details>

<br/>

<details>
<summary>NavMenu.scss</summary>

```scss
@use "../../assets/sass/_variables.scss" as *;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: $color-black;

  &__item {
    height: 30px;
  }
}

@media (min-width: 992px) {
  .nav {
    grid-column: 1 / -1;
    &__heading {
      margin: 20px auto;
    }

    &__item {
      &--menu {
        display: none;
      }
    }
  }
}
```

</details>

<br/>

---

## Extension: Updating the SettingsMenu

1. Add a form with two inputs and labels. One for the firstName and the other for the lastName. Add a handleUserChange prop and have it called onInput of both of the inputs.

handleUserChange will be the function we will pass into the component. This function is going to be what we use to update state.

```jsx
// SettingsMenu.jsx

const SettingsMenu = props => {
  const { userName, toggleSettings, handleUserChange } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={profilePicture} className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
        <form className="settings-menu__form">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="settings-menu__input" onInput={handleUserChange} />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="settings-menu__input" onInput={handleUserChange} />
        </form>
      </div>
    </div>
  );
};
```

2. Import the useState hooke and initialize it app. Use the user object as the initial state.

```jsx
// App.jsx

const [user, setUser] = useState({
  firstName: "John",
  lastName: "Doe",
});
```

3. Write a function to handle user change. You can use the event to get the target's name. This is the input that is calling the function. That is going to be the key on the object we want to update. Get the value from the event.

In order to make sure we do not mutate the original state use the spread operator to make a copy of the object. This will copy all the keys, we can then update the key with the new value.

```jsx
// App.jsx

const handleUserChange = event => {
  const inputKey = event.target.name;
  const inputValue = event.target.value;
  setUser({ ...user, [inputKey]: inputValue });
};
```

4. Pass the function to the Nav. From the nav you will need to pass it to the SettingsMenu.

```jsx
//App.jsx

<Nav userName={`${user.firstName} ${user.lastName}`} handleUserChange={handleUserChange} />
```

```jsx
//Nav.jsx

{
  showSettings && (
    <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleUserChange={handleUserChange} />
  );
}
```
