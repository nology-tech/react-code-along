# Challenge: Functions as Props

In VS Code right click on the challenge.md file and click "Open Preview".

## Brief

The aim of this challenge is to get you to practice using functions as props and state to show and hide a component.

You will need to create a NavMenu component. You will need to update the Nav component so that when the menu icon is clicked it triggers the NavMenu to show. You will need to use functions as props to pass the NavMenu function to hide it.

In the image below you can see the current component and the what it needs to look like after the button has been clicked.


<img src="./images/nav-menu-state.PNG" width="600"/>

---

## Todo

**Focus on using functions as props first then style it.**

1. Create a NavMenu menu component.

- The black cross image is in src/assets/images/black-cross.png.
- The menu items are Home, All Albums and Rated Albums.

2. Add conditional State to the Nav and display the NavMenu based on this.

3. Write a function to toggle the conditional state in Nav and hook it up to the nav menu icon.

4. It is up to you to put the rest of the pieces together. How can you pass the function to update state to the NavMenu? How do you get a function to run onCLick?

5. Style the NavMenu.

---

## **EXTENSION** : Brief

This is optional. The aim is to get you to practice using functions as props and state to show capture user input and store it in state.

You need to add a form with two inputs and a button to the SettingsMenu component to allow the user to update the user object in App.jsx. You will need two inputs so you can update both firstName and lastName key on the object and Button to submit the form.

In the image below you can see the current component and the what it needs to look like after text has been entered to both inputs.

<img src="./images/extension-capture-user.PNG" width="600"/>

---

## Todo

1. Set the user object to state in App.jsx.

2. Add a form with two inputs, two labels and A Button to the SettingsMenu.

3. You dealing with a form being submitted, this is new. Create a function in App.jsx that logs the event to the console.

4. Use functions as props to get the function to where it needs to be? On your new form when it is submitted?

5. When you submit the form do you need to prevent it from refreshing? [React handling events](https://reactjs.org/docs/handling-events.html)

6. In the console see what you get, can you get the inputs? If you have the inputs can you get the values?

7. Write a function to update the state. How can you handle updating object state?

_HINT [Cheat Sheet for Updating Objects and Arrays in React State](https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np)_

8. EXTENSION Can you check if the inputs have a value and only update the state if they do? Can you clear the input fields afterwards? 

