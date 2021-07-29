# Components

## Objectives

- What is a Component?
- How do Components fit into our project structure?
- How do we render Components?

## CA: How to set up a Component - Create a Nav Component

Create a components folder 

src/components

```bash
cd src && mkdir components
```
The naming convention for Components is that the component starts with a capital letter e.g. Nav

Create a Nav folder within the components folder

src/components/Nav

```bash
cd components && mkdir Nav
```
We now need to create the file that our JSX will be written in

src/components/Nav/Nav.jsx

```bash
cd Nav && touch Nav.jsx
```
Import React into Nav.jsx and create the functional component

```jsx
import React from react

const Nav = () => {

  return (

  )
}
```
Demo writing JSX in Nav.jsx
 
```jsx
import React from 'react'

const Nav = () => {

  return (
    <p>This is a Nav Component</p>
  )
}
```

Explain that we need to export components and import them to the file where we would like to render them

Export the Nav component and import it into App.jsx

Render the component in App.jsx and show the component on the webpage

Write the code for the nav in Nav.jsx
The images for the nav can be found in src/assets/images

If not already covered, introduce the concept of module sass

```jsx
import React from 'react'
import menu from '../../assets/images/menu-icon.png'
import settings from '../../assets/images/settings-icon.png'
import "./Nav.module.scss"
import "../../App.scss"


const Nav = () => {
    return (
        <nav>
            <img src = {menu} />
            <h1>Ear Worm</h1>
            <img src = {settings} />   
        </nav>
    )
}

export default Nav
```

Create Nav.module.scss and style the component using the below styles

```scss
nav {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;

    img {
        height: 30px;
    }
}
```