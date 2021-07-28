# Solution: Components

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Creating the button components

1. In the components folder create two folders, one for each button. Click the below link to see how they should look.

![](./button-folders.png)

2. Within each of your button folders create a jsx file, an index file and a sass file for styling.

3. Import react and create the function for each of your components - remember to export your component.

```jsx 
import React from 'react'

const ButtonExplore = () => {
    return (
        
    )
}

export default ButtonExplore
```
4. Import and export your components in your index.js files.

```js
import ButtonExplore from "./ButtonExplore";

export default ButtonExplore;
```

5. Write the code for each of your buttons and add sass styling. - remember to import your styles in your component file. As i've used class names I have used the "styles.classname" syntax as shown below.

```jsx 
import React from 'react'
// imports 'styles' from your sass file in order to use classes
import styles from './ButtonExplore.module.scss'

const ButtonExplore = () => {
    return (
        <div>
            {/*To add a class to a component use styles.nameOfClass*/}
            <button className = {styles.buttonExplore}>Explore</button>
        </div>
    )
}

export default ButtonExplore
```

```scss 
@import "../../assets/sass/variables.module.scss";

.buttonExplore {
    height: 35px;
    width: 75px;
    margin-right: 10px;
    background-color: $color-primary;
    border-radius: 15px;
    border: none;
}
```

```jsx
import React from 'react'
import styles from './ButtonLetsGo.module.scss'

const ButtonLetsGo = () => {
    return (
        <button className = {styles.buttonLetsGo}>Lets Go</button>
    )
}

export default ButtonLetsGo
```
```scss
@import "../../assets/sass/variables.module.scss";

.buttonLetsGo {
    height: 35px;
    width: 75px;
    margin-right: 10px;
    background-color: $color-secondary;
    border-radius: 15px;
    border: none;
}
```

## Render your buttons in App.jsx

1. In App.jsx, import the two button components you have created.
   
```jsx
import ButtonLetsGo from "./components/ButtonLetsGo";
import ButtonExplore from "./components/ButtonExplore";
```

2. Render your two components within a section tag
   
```jsx 
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav"
import ButtonLetsGo from "./components/ButtonLetsGo";
import ButtonExplore from "./components/ButtonExplore";

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
    <>
      <Nav />
      <header>
        <img src={greetingImg} />
        <h1>
          Good {greetingTime} {user.firstName} {user.lastName}
        </h1>
      </header>
      <section>
        <ButtonLetsGo />
        <ButtonExplore />
      </section>
    </>
  );
};

export default App;
```

3. Add a class to the section container that contains the buttons you've just rendered.

```jsx 
<section className = "buttonSection">
        <ButtonLetsGo />
        <ButtonExplore />
</section>
```
4. Style the section in App.scss, Note - We don't have to use the styles.nameOfClass syntax here as App.scss is not a module, i.e it's not App.module.scss. The difference is how the sass is scoped and you can read more here https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8
   
```scss 
.buttonSection {
  display: flex;
  justify-content: center;
  width: 100vw;
}
```

