# Functions as Props

This branch is focused on getting the student use to having functions higher up in the component tree and passing them with props to child components to use. 

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/s/Nologyio/Ea-oHyHPrWFIumyEFVQnWd4BuKtIyOp-w5D3XT0t8--0wA?e=FiHznY)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/06-funcs-as-props/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- Overall, How can we get components to communicate within a React application?
- How can we use functions as props to trigger components to be shown or hidden?
- How can we use functions as props to capture a users input to filter some data?

---

## How can we use functions as props to trigger components to be shown or hidden?

Creating the SettingsMenu Component.

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
      right: 20px;
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
      <img src={menu} className="nav__item " alt="menu icon" />
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
      <img src={menu} className="nav__item" alt="menu icon" />
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

## How can we use functions as props to capture a users input to filter some data?

Creating the Search Box Component.

This component is going to capture user input and pass it back to its parent component.

It accepts three props label, searchTerm and handleInput.

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
@use "../../assets/sass/_variables.scss" as *;

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

With the child component created move onto creating the parent container.

Creating the Explore Albums Container.

In src create a containers folder. In the folder create a ExploreAlbums folder and a ExploreAlbums.jsx file.

The container accepts a albumsArr prop. It needs to import SearchBox and AlbumTiles components.

It will capture user input using the SearchBox, filter the albumsArr with the input and display it with the AlbumTiles component.

<details>
<summary>ExploreAlbums.jsx</summary>

```jsx
import React from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";

const ExploreAlbums = props => {
  const { albumsArr } = props;

  return (
    <>
      <SearchBox label={"albums"} />
      <AlbumTiles title={"Results"} />
    </>
  );
};

export default ExploreAlbums;
```

</details>

<br/>

Import the component into App.jsx and add the JSX below to the the return statement bellow the gallery section.

Add the albumsArr prop and pass in the albums.

```jsx
// App.jsx

<section className="explore">
  <h2 className="explore__heading">Explore</h2>
  <ExploreAlbums albumsArr={albums} />
</section>
```

Update the App.scss.

<details>
<summary>App.scss</summary>

```scss
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

      &__heading {
        padding: 0;
      }
    }

    .explore {
      grid-column: 1 / -1;
    }
  }
}
```

</details>

Set up state in the ExploreAlbums container to store the user input.

Create a function to handle the input. You will need to use the [event](https://reactjs.org/docs/events.html). Drill into it to get the value.

This function will need to clean the input to get the best results from the filter.

```jsx
// ExploreAlbums.jsx

const [searchTerm, setSearchTerm] = useState("");

const handleInput = event => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput);
};
```

Pass the searchTerm state and handleInput function to the SearchBox component.

```jsx
// ExploreAlbums.jsx

<SearchBox label={"albums"} searchTerm={searchTerm} handleInput={handleInput} />
```

The next step is to use the search term to filter the albumsArr. On each album object you can use the strAlbum key to see if the searchTerm is included.

You will need to set the strAlbum to lowercase to get the best match.

You can check the strAlbumThumb key as well to make sure it has a img url.

```jsx
// ExploreAlbums.jsx

const filteredAlbums = albumsArr.filter(album => {
  const albumTitleLower = album.strAlbum.toLowerCase();

  return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
});
```

Pass the filteredAlbums to the AlbumTiles component.

<details>
<summary>Completed ExploreAlbums</summary>

```jsx
import React, { useState } from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";

const ExploreAlbums = props => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredAlbums = albumsArr.filter(album => {
    const albumTitleLower = album.strAlbum.toLowerCase();

    return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
  });

  return (
    <>
      <SearchBox label={"albums"} searchTerm={searchTerm} handleInput={handleInput} />
      <AlbumTiles title={"Results"} albumsArr={filteredAlbums} />
    </>
  );
};

export default ExploreAlbums;
```

</details>

<br/>

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

---
