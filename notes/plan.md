# Set up and JSX

This branch is focused on getting the student use to the structure of a React project and confident using JSX.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/r/sites/Nologyio/_layouts/15/Doc.aspx?sourcedoc=%7B22314840-16F5-45D8-892B-21236DD2D689%7D&file=React%20Introduction.pptx&action=edit&mobileredirect=true)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/01-setup-and-jsx/notes/plan.md)
- [Component Tree](./component-tree.md)
- [Images for Codealong](https://opusrs.sharepoint.com/:f:/s/Nologyio/En2N-F7hDwVJlkshZ_PAAtUBFx-7af4Fttuf3ZpTM-uhhQ?e=nMiUht)

### Objectives

- How to set up a React Project?
- What is the Project Structure with React?
- What is JSX?
- How do we conditionally show JSX?

---

## How to set up a React Project?

Clone down the repo and install its dependencies.

```bash
git clone https://github.com/nology-tech/react-code-along.git
cd react-code-along
npm install
git checkout 01-setup-and-jsx
```

We are working with a project created with [create-react-app](https://github.com/facebook/create-react-app). This is a quick way creating a React project. When we use create-react-app to build a project we do have to delete and remove some generated code.

Delete the following:

- public/favicon.ico
- public/logo192.png
- public/logo512.png
- logo.svg
- yarn.lock

Remove the Boilerplate html tags below from public/index.html.

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

You can also update the title and description meta tag.

```html
<title>Ear Worm</title> <meta name="description" content="Web site created to learn react concepts" />
```

Change the App.js to App.jsx and add in the code below.

```jsx
// App.jsx
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Hello World</h1>
      </header>
    </div>
  );
};

export default App;
```

---

## What is the Project Structure with React?

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

[Images](https://opusrs.sharepoint.com/:f:/s/Nologyio/En2N-F7hDwVJlkshZ_PAAtUBFx-7af4Fttuf3ZpTM-uhhQ?e=nMiUht)

Create a \_variables.scss in the SASS folder. Add in some basic variables

```scss
// _variables.scss
$color-black: #2d3436;
$color-white: #ffffff;
$color-primary: #5dadb0;
$color-secondary: #fdcb6e;
```

Change the App.css to App.scss, delete the boiler plate and add in the code below.

<details>
<summary>Completed App.scss</summary>

```scss
// App.scss
@use "./assets/sass/_variables.scss" as *;

.app {
  .greeting {
    text-align: center;

    &__heading {
      color: $color-black;
    }

    & > * {
      margin: 20px;
    }
  }
}

@media screen and (min-width: 992px) {
  .app {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, min-content);

    .greeting {
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: center;

      &__img {
        height: 100px;
      }
    }
  }
}
```

</details>

---

## JSX

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
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Hello World</h1>
        <p>{message}</p>
        <p>{500 * 50}</p>
      </header>
    </div>
  );
};

export default App;
```

Move on to importing the Assets and conditionally showing them. You can use `Date().getHours()` to get the current hour. Depending on the hour you can set it to a different image. To test the logic you can just set it to any number between 0 and 23.

```jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

const App = () => {
  const currentHour = new Date().getHours();
  let greetingImg = sunrise;

  if (currentHour > 12) {
    greetingImg = sun;
  }

  if (currentHour > 18) {
    greetingImg = moon;
  }

  return (
    <div className="app">
      <header className="greeting">
        <img src={greetingImg} alt="Current time icon" className="greeting__img" />
        <h1 className="greeting__heading">Hello World</h1>
      </header>
    </div>
  );
};

export default App;
```

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)
