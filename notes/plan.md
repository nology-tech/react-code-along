# Functions as Props

## Objectives

- How can we update the state a Parent component from a Child component?
- How can we use functions as props to trigger components to be shown or hidden?
- How can we use functions as props to capture a users input to filter some data?

---

## Creating the SettingsMenu Component

This is going to be the child component that responds to state change. It also needs a way of changing state as well so we will be passing it a function to do so.

Create a SettingsMenu component. This is going to accept a prop called userName.

Copy the JSX and SCSS files below.

<details>
<summary>SettingsMenu.jsx</summary>

```jsx
import React from "react";

import "./SettingsMenu.scss";
import whiteCross from "../../assets/images/white-cross.png";
import profilePicture from "../../assets/images/profile-picture.png";

const SettingsMenu = props => {
  const { userName } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" />
        <img src={profilePicture} className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
      </div>
    </div>
  );
};

export default SettingsMenu;
```

</details>

<details>
<summary>SettingsMenu.scss</summary>

```scss
@import "../../assets/sass/variables.scss";

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
    left: 50px;

    &:hover {
      cursor: pointer;
    }
  }
  &__title {
    color: $color-white;
    font-size: 30px;
  }
}

@media (min-width: 992px) {
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
      top: 20px;
      left: 20px;
    }
  }
}
```

</details>

In App.jsx pass the userName prop to Nav.jsx. This will be created from the user object.

```jsx
// App.jsx

<Nav userName={`${user.firstName} ${user.lastName}`}
```

The SettingsMenu is going to be a child component of Nav.jsx. Import it into the Nav component and pass it the userName prop.

```jsx
// Nav.jsx

import SettingsMenu from "../SettingsMenu/SettingsMenu";

const Nav = props => {
  const { userName } = props;

  return (
    <nav className="nav">
      <SettingsMenu userName={userName} />
      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" />
    </nav>
  );
};
```

Now the component should be constantly visible. We want to alter that so it responds to state.

Add state to the Nav component and write a function to toggle state change. Have SettingsMenu only be visible if the state is true.

Have the settings icon use the function to toggle state change on click.

```jsx
// Nav.jsx
const Nav = props => {
  const { userName } = props;
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="nav">
      {showSettings && <SettingsMenu userName={userName}>}
      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" onClick={toggleSettings} />
    </nav>
  );
};
```

The last part of the puzzle is passing the toggleSettings function to the SettingsMenu component with props. This is so hide the menu when the cross is clicked.

In Nav.jsx add toggleSetting prop to the component and pass in the toggleSettings function.

```jsx
// Nav.jsx

 {showSettings && <SettingsMenu userName={userName} toggleSettings={toggleSettings}>}
```

In the SettingsMenu.jsx component get it to accept the toggleSettings prop. Add a onClick to the white cross and have it use the toggle settings function to change the state.

The finished component is below.

<details>
<summary>SettingsMenu.jsx</summary>

```jsx
import React from "react";

import "./SettingsMenu.scss";
import whiteCross from "../../assets/images/white-cross.png";
import profilePicture from "../../assets/images/profile-picture.png";

const SettingsMenu = props => {
  const { userName, toggleSettings } = props;
  return (
    <div className="settings-menu">
      <div className="settings-menu__content">
        <img src={whiteCross} alt="Close menu" className="settings-menu__cross" onClick={toggleSettings} />
        <img src={profilePicture} className="settings-menu__profile" />
        <h2 className="settings-menu__title">{userName}</h2>
      </div>
    </div>
  );
};

export default SettingsMenu;
```

</details>

<br/>

---

## Creating the Search Box Component

This component is going to capture user input and pass it back to its parent component.

It accepts three props.

- label -> This the content for the label and the name for the input.
- searchTerm -> This is going to be the user inputted state.
- handleInput -> This will be function passed to the component to update the state.

Create the SearchBox component.

Copy the JSX and SCSS files below.

<details>
<summary>SearchBox.jsx</summary>

```jsx
import React from "react";

import "./SearchBox.scss";

const SearchBox = props => {
  const { label, searchTerm, handleInput } = props;

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label">
        {capitalizedLabel}
      </label>
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />
    </form>
  );
};

export default SearchBox;
```

</details>

<details>
<summary>SearchBox.scss</summary>

```scss
@import "../../assets/sass/variables.scss";

.search-box {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 20px;
  }

  &__input {
    margin: 20px 0;
    padding: 10px;
    font-size: 18px;
    border: 5px $color-grey solid;
    border-radius: 15px;
    color: $color-black;

    &:focus {
      border: 5px $color-primary solid;
      outline: none;
    }
  }
}

@media (min-width: 992px) {
  .search-box {
    &__input {
      width: calc((100% / 3) - 50px);
    }
  }
}
```

</details>

<br/>

---

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
