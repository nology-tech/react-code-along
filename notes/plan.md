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

```jsx
import React from 'react'

const Nav = () => {

  return (
    <nav>
        <span class="menu"></span>
        <h1>Ear Worm</h1>
        <p>Cog looking thingy to go here</p>
    </nav>
  )
}
```

Style the component using the below styles

```css
styles to go here
```