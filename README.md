# React Code-along

- [About](#about)
- [Notes Folder](#notes-folder)
- [Conventions](#conventions)
- [Setup](#setup)
- [Branches](#branches)
- [Additional Resources](#additional-Resources)

---

<h2 id="about">About</h2>

This is the React code-along covering the first 7 topics for the \_nology course. Each topic has its branch, as you look into each subject you will be building this mini project.

Each branch focuses on its topic, with a lesson plan, component tree, challenge, and solution to complete.

**The plan, component-tree, challenge, and solution markdown files are in the notes folder on each branch.**

Each plan is more prescriptive than the previous project's this is for a couple of reasons.

- To keep the project consistent throughout.
- To give the Coach an idea of what you will cover without having done the branch before.
- To allow the Student a plan/snippets of the lesson if they fall behind or run into bugs.

---

<h2 id="notes-folder">Notes Folder</h2>

The notes folder contains everything to complete the topic.

The plan is the lesson, it contains steps, snippets, components, and styles you will need to create to complete the branch. If the code snippets are large they are in drop-down lists. Feel free to copy and paste them as they are normally style files.

**If you go to the md file on GitHub it gives a copy icon on the code snippet.**

The component-tree is a visual representation of the project. It has a component tree for the start of the branch and what it will look like when you are done. With a list of the components.

The challenge has a brief for the students to complete. The first couple of branches have broken the brief down into steps.

The solution has broken the challenge brief down and completed each little step.

---

<h2 id="conventions">Conventions</h2>

The project has been built with these conventions.

- SCSS for styling
- BEM for naming
- Components consist of a .jsx and .scss file. There is no index.js in the component folder. When the components are imported you will have to give a path to the .jsx file, not just the folder.

---

<h2 id="setup"> Setup </h2>

Clone the repo and install the dependencies.

```bash
git clone https://github.com/nology-tech/react-code-along.git
cd react-code-along
npm install
```

To start the live server run.

```bash
npm start
```

To change branch.

```bash
git checkout name-of-branch
```

---

<h2 id="branches">Branches</h2>

The branches available are below.

- [main](https://github.com/nology-tech/react-code-along)
- [01-setup-jsx](https://github.com/nology-tech/react-code-along/tree/01-setup-and-jsx)
- [02-components](https://github.com/nology-tech/react-code-along/tree/02-components)
- [03-props](https://github.com/nology-tech/react-code-along/tree/03-props)
- [04-arrays](https://github.com/nology-tech/react-code-along/tree/04-arrays)
- [05-state](https://github.com/nology-tech/react-code-along/tree/05-state)
- [06-funcs-as-props](https://github.com/nology-tech/react-code-along/tree/06-funcs-as-props)
- [07-routing](https://github.com/nology-tech/react-code-along/tree/07-routing)

---

<h2 id="additional-Resources">Additional Resources</h2>

The project was wire framed using Figma. The design file is [here](https://www.figma.com/file/XOEwdDoEf8eUTzEbJEh8Bo/Music-app?node-id=0%3A1).

Each branch and the component trees were planned on Mural. If you are interested have a look [here](https://app.mural.co/t/nology9400/m/nology9400/1626967150955/afa9a3055ab210bcdd5433af4cbaf3e873b7a398?sender=u8c6e1ccb69fb91445cd51551).

Both the data file gists are here.

- [artist.js](https://gist.github.com/Charlie-robin/68461faec41456c5c05bd529ae167ba1)
- [album.js](https://gist.github.com/Charlie-robin/71222ddfbbd70e2de9e25097e2d0d665)

They are both responses from the [AudioDB](https://www.theaudiodb.com/) API.

---
