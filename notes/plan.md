# Set up and JSX

## Objectives

- How to set up a React Project?
- What is the Project Structure with React?
- What is JSX?
- How do we conditionally show JSX?

## CA: How to set up a React Project?

Clone down the repo and install dependencies.

```bash
git clone https://github.com/nology-tech/react-code-along.git
cd react-code-along
npm install
git checkout 01-setup-and-jsx
```

We are working with a project created with [create-react-app](https://github.com/facebook/create-react-app). We have to delete and remove some generated code.

```bash
npx create-react-app NAME-OF-THE-PROJECT
```

Delete the following:

- public/favicon.ico
- public/logo192.png
- public/logo512.png
- logo.svg
- yarn.lock

Remove the Boilerplate below from public/index.html.

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="description" content="Web site created using create-react-app" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

Update the title in public/index.html.

Remove the Boilerplate below from src/App.css.

Change the App.js to App.jsx and clear out App.jsx

```jsx
// App.jsx
import "./App.css";

const App = () => {
  return (
    <header>
      <h1>Hello World</h1>
    </header>
  );
};

export default App;
```

---

## CA: What is the Project Structure with React?

### Topics

- How do we add a packages?
- What is the public folder?
- What is the src folder?
- How do we add Assets?

Add sass to the project.

```bash
npm install sass ---save-dev
```

Create an assets folder in src.
In the assets make two new folders sass, images.

In the images folder add in the 3 images.

Create a variables.scss in the SASS folder.

### Snippet:

```scss
// variables.scss
$color-black: #2d3436;
$color-white: #ffffff;
$color-primary: #5dadb0;
$color-secondary: #fdcb6e;
```

Change the App.css to App.scss and do some basic styles.

```scss
// App.scss
@import "./assets/sass/variables.module.scss";

header {
  text-align: center;
  margin: 20px;
}

h1 {
  color: $color-black;
}
```

---

## CA: JSX

### Topics

- Why is the app a function?
- Where What is the JSX?
- Where do we write JS?
- How can we use our Assets?
- Conditional Render items?

Demo JS and JSX, whatever you like below is just a example.

```jsx
// App.jsx
const App = () => {
  let message = "We can do JS here";

  if (message.length > 10) {
    message += " , we add logic here as well.";
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>{message}</p>
      <p>{500 * 50}</p>
    </>
  );
};

export default App;
```

Move on to bringing Assets and conditionally showing them.

```jsx
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

const App = () => {
  const currentHour = new Date().getTime();
  let greetingImg = sunrise;

  if (currentHour > 12) {
    greetingImg = sun;
  }

  if (currentHour > 18) {
    greetingImg = moon;
  }

  return (
    <div>
      <img src={greetingImg} />
      <h1>Hello</h1>
    </div>
  );
};

export default App;
```

## Challenge

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)
