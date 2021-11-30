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
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" />
        <p className="nav-menu__item">Home</p>
        <p className="nav-menu__item">All Albums</p>
        <p className="nav-menu__item">Rated Albums</p>
      </div>
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
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleNav} />
        <p className="nav-menu__item">Home</p>
        <p className="nav-menu__item">All Albums</p>
        <p className="nav-menu__item">Rated Albums</p>
      </div>
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

.nav-menu {
  background-color: $color-secondary;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__cross {
    position: absolute;
    top: 20px;
    right: 50px;

    &:hover {
      cursor: pointer;
    }
  }

  &__item {
    font-size: 30px;
    text-decoration: none;
    color: $color-black;
    padding: 20px;
  }
}

@media screen and (min-width: 992px) {
  .nav-menu {
    background-color: rgba($color-black, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      position: relative;
      background-color: $color-secondary;
      width: 30%;
      height: 30vw;
      border-radius: 15px;
    }

    &__cross {
      right: 20px;
    }
  }
}
```

</details>

<br/>

---

## Extension: Updating the SettingsMenu

1. Import the useState hook and initialize it app. Use the user object as the initial state.

```jsx
// App.jsx

const [user, setUser] = useState({
  firstName: "John",
  lastName: "Doe",
});
```

2. Add a form with two inputs, two labels and a Button. One for the firstName and the other for the lastName. Add a handleSubmit prop and have it called onSubmit of the form. handleSubmit will be the function we will pass into the component. This function is going to be what we use to update state.

```jsx
// SettingsMenu.jsx

import Button from "../Button/Button";

const SettingsMenu = props => {
  const { userName, toggleSettings, handleSubmit } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={profilePicture} alt="profile" className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
        <form className="settings-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="settings-menu__input" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="settings-menu__input" />
          <Button isSecondary={true} buttonText={"Save"} />
        </form>
      </div>
    </div>
  );
};
```

3. Create a function takes takes the event and logs it to the console.

```jsx
// App.jsx

const handleSubmit = event => {
  console.log(event);
};
```

4. Pass the function to the Nav, from the nav you will need to pass it to the SettingsMenu component.

```jsx
//App.jsx

<Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} />
```

```jsx
//Nav.jsx

{
  showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings} handleSubmit={handleSubmit} />;
}
```

5. In the handleSubmit function use `event.preventDefault()` to stop the form from refreshing.

```jsx
// App.jsx

const handleSubmit = event => {
  event.preventDefault();
  console.log(event);
};
```

6. Dig into the event to see what values you can extract. The target will give you the form which you can go into to find the inputs.

```jsx
// App.jsx

const handleSubmit = event => {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target[0]);
  console.log(event.target[0].value);
};
```

7. I saved the input values to variables. With them saved I could check if they were truthy. If they were I created a new object with the correct keys and values, then used setUser() to update the state with that object. Finally I called the reset method on the form to clear the fields.

```jsx
// App.jsx

const handleSubmit = event => {
  event.preventDefault();
  const firstName = event.target[0].value;
  const lastName = event.target[1].value;

  if (firstName && lastName) {
    const updatedUser = { firstName, lastName };
    setUser(updatedUser);
    event.target.reset();
  }
};
```

## Completed Components

<details>
<summary>SettingsMenu.jsx</summary>

```jsx
import React from "react";

import "./SettingsMenu.scss";
import whiteCross from "../../assets/images/white-cross.png";
import profilePicture from "../../assets/images/profile-picture.png";
import Button from "../Button/Button";

const SettingsMenu = props => {
  const { userName, toggleSettings, handleSubmit } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={profilePicture} alt="profile" className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
        <form className="settings-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" className="settings-menu__input" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="settings-menu__input" />
          <Button isSecondary={true} buttonText={"Save"} />
        </form>
      </div>
    </div>
  );
};

export default SettingsMenu;
```

</details>

<br/>

<details>
<summary>SettingsMenu.scss</summary>

```scss
@use "../../assets/sass/_variables.scss" as *;

.settings-menu {
  background-color: $color-black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__cross {
    position: absolute;
    top: 20px;
    right: 50px;

    &:hover {
      cursor: pointer;
    }
  }
  &__title {
    color: $color-white;
    font-size: 30px;
  }

  &__form {
    display: grid;
    font-size: 20px;
    color: $color-white;
    justify-items: center;
  }

  &__input {
    margin: 10px 0;
    padding: 10px;
    font-size: 20px;
    border-radius: 15px;
    border: 5px solid $color-grey;
    color: $color-black;

    &:focus {
      outline: none;
      border: 5px solid $color-primary;
    }
  }
}

@media screen and (min-width: 992px) {
  .settings-menu {
    background-color: rgba($color-black, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      position: relative;
      background-color: $color-black;
      width: 30%;
      height: 80%;
      border-radius: 15px;
    }

    &__cross {
      right: 20px;
    }
  }
}
```

</details>

<br/>
