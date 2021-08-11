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
@import "../../assets/sass/variables.scss";

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

