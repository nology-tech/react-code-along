# Props
## Objectives
- What are Props and How do we use them?
- How can we make a mock data file?
- What is Object Destructuring?
---
## CA: What are Props and How do we use them?
### Topics:
- How can we pass props into a Component?
- How do we use Props in Component?
Lets refactor our two buttons into one Button component that takes in props.
1. Passing Props into the component
```jsx
// App.jsx
<Button buttonText={"This is being passed in"} />
```
2.  Log props to the console and then use props in the component. 
```jsx
// Button.jsx
// using props.buttonText in the button
```
3.  Lets pass in a conditional prop
```jsx
// App.jsx
<Button buttonText={"This is being passed in"} isSecondary={true} />
```
4. Lets use this to do some conditional styling. If isSecondary is true lets add the secondary class to the component.
```jsx
// Button.jsx
// using props.isSecondary in the button
```
---
## How can we make a mock data file?
In src create a data folder. In the folder create a artist.js file. This will be the mock data for the challenge component.
```js
const artist = {
  idArtist: "111247",
  strArtist: "The Beatles",
  strArtistAlternate: "Beatles",
  intFormedYear: "1957",
  intDiedYear: "1970",
  strDisbanded: "Yes",
  strStyle: "Rock/Pop",
  strGenre: "Rock",
  strMood: "Happy",
  intMembers: "4",
  strCountry: "Liverpool, England",
  strCountryCode: "GB",
  strArtistThumb: "https://www.theaudiodb.com/images/media/artist/thumb/qpvwuv1347996168.jpg",
  strArtistLogo: "https://www.theaudiodb.com/images/media/artist/logo/sqtvqw1519816358.png",
  strArtistClearart: "https://www.theaudiodb.com/images/media/artist/clearart/rrywwv1512575176.png",
  strArtistWideThumb: "https://www.theaudiodb.com/images/media/artist/widethumb/styrrt1518621883.jpg",
  strArtistFanart: "https://www.theaudiodb.com/images/media/artist/fanart/xrqqqu1541458809.jpg",
  strArtistFanart2: "https://www.theaudiodb.com/images/media/artist/fanart/sssrqr1341917298.jpg",
  strArtistFanart3: "https://www.theaudiodb.com/images/media/artist/fanart/wwvtpp1341917310.jpg",
  strArtistFanart4: "https://www.theaudiodb.com/images/media/artist/fanart/b6zl6c1613120079.jpg",
  strArtistBanner: "https://www.theaudiodb.com/images/media/artist/banner/utwpss1346162520.jpg",
};
```
In App.jsx import the object and log it and some of its keys to the console.
```jsx
// App.jsx
import artist from "./data/artist.js";
console.log(artist);
console.log(artist.strArtist);
```
---
## Move onto Challenges
- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)
---
## Object Destructuring
Lets refactor our components with object destructuring
```jsx
// Button.jsx
// left hand side variables you are unpacking
// right hand side is the object / source of values
const { buttonText, isPrimary } = props;
```
```jsx
// Button.jsx
// left hand side variables you are unpacking
// right hand side is the object / source of values
const { buttonText, isPrimary } = props;