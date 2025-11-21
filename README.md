📘 Creating Elements in JavaScript vs React
(Code Explanation from Episode 1)

In this episode, we compared how to create and render elements using plain JavaScript and React.
Both methods aim to display content on the screen, but React does it in a much cleaner and optimized way.

✅ 1. Creating and Rendering an Element Using JavaScript (DOM Manipulation)
Code
 const header = document.createElement("h1");
 header.innerHTML = "USING JS";
 const root = document.getElementById("root");
 root.appendChild(header);

Explanation

document.createElement() → Creates an actual HTML element in memory.

innerHTML → Sets the content of the element.

getElementById("root") → Selects the root container.

appendChild(header) → Inserts the new element into the webpage.

Drawbacks

❌ Too many steps
❌ Hard to manage when UI becomes complex
❌ Every update requires direct DOM operations

✅ 2. Creating and Rendering an Element Using React
Code
const header = React.createElement(
    "h1",
    {
        id: "header",
        class: "Main _ header"
    },
    "Haii Using React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

🔍 Line-by-Line Explanation
1. Creating a React Element
const header = React.createElement("h1", { id: "header", class: "Main _ header" }, "Haii Using React");


"h1" → Type of element to create

{ id: "header", class: "Main _ header" } → Attributes / properties of the element

"Haii Using React" → Content inside the <h1>

React does not create real DOM nodes directly.
Instead, it creates a virtual DOM object like this:

{
  type: "h1",
  props: {
    id: "header",
    class: "Main _ header",
    children: "Haii Using React"
  }
}


This makes updates fast and efficient.

2. Selecting the Root
const root = ReactDOM.createRoot(document.getElementById("root"));


Selects the root HTML element where React will control everything.

Creates a root for the React app (React 18 Feature).

3. Rendering the React Element
root.render(header);


Tells React to show the element inside the root.

React converts the virtual DOM into real DOM nodes.

🎯 Why React Is Better Than Plain JavaScript
Feature	JavaScript DOM	React
Code Length	Long	Short
Maintainability	Hard	Easy
Performance	Frequent DOM updates	Virtual DOM = Optimized
Reusability	No	Yes (Components)

React lets you focus on what UI should look like, not how to manually build it.

📘 React Notes — Episode 2
Git • GitHub • Bundlers • npm • parcel • package.json • Browserslist
🟦 1. Git & GitHub
Git

Git is a version control system used to track changes in your code.

Why it’s useful:

You can go back to previous versions

You can track what changed and when

Helps when working with teams

GitHub

GitHub is an online storage for your Git repositories.

Why we use GitHub:

Safe backup

Share code with others

Deploy projects

Work in teams

⭐ Common Git Commands
Command	Meaning
git init	Start a git repo
git add .	Add files to staging
git commit -m "message"	Save changes with a message
git branch -M main	Rename branch
git remote add origin <url>	Connect to GitHub repo
git push -u origin main	Upload code to GitHub
🟦 2. Commiting & Pushing
Commit

A commit is like “saving” your work in Git with a message.

git add .
git commit -m "Added header component"

Push

Push means uploading your commits to GitHub.

git push origin main

🟦 3. What is Bundling?

Bundling means taking all your files (JS, CSS, images, etc.)
and combining + optimizing them into a format that the browser understands.

Browsers don’t understand modern JS features, imports, JSX —
so bundlers convert, compress, optimize these files.

🟦 4. Bundlers (Vite / Webpack / Parcel)
Bundler

A bundler prepares your code for the browser.

Popular Bundlers:
Bundler	Why it's used
Vite	Fastest, modern tool
Webpack	Very powerful, used in big companies
Parcel	Zero-config, very easy for beginners

In your course: Parcel is used.

🟦 5. npm (Node Package Manager)

npm comes with Node.js
It allows you to:

install packages

manage versions

create scripts

🟦 6. package.json

package.json is the heart of your project.
It stores:

Project name

Version

Dependencies

Dev-dependencies

Scripts

Author

Example:

{
  "name": "react-app",
  "version": "1.0.0",
  "dependencies": {},
  "devDependencies": {}
}

🟦 7. Difference Between ~ and ^ in package.json
Symbol	Meaning
^ (caret)	Update MINOR + PATCH versions
~ (tilde)	Update only PATCH versions
Example

"parcel": "^2.11.0" → can update up to 2.x.x
"parcel": "~2.11.0" → can update up to 2.11.x only

Caret is more flexible, tilde is more stable.

🟦 8. package-lock.json

This file locks exact versions of all dependencies.

Why needed?

Ensures all developers use exact same version

Ensures your project works the same on every machine

You should not edit it manually.

🟦 9. npm install -D parcel

-D means dev dependency.

Parcel is required only during development, not production.

So we install it like:

npm install -D parcel


It goes into "devDependencies".

🟦 10. node_modules

This folder contains all installed packages.

Automatically generated

Should NOT be pushed to GitHub

Can be deleted anytime (run npm install to rebuild it)

🟦 11. .gitignore

.gitignore tells Git which files NOT to track.

We usually ignore:

node_modules
dist
.env

🟦 12. Running Parcel (Development Server)
npx parcel index.html


npx → runs a package without installing globally
Parcel:

Bundles your files

Starts a local server

Auto refreshes on save (HMR)

🟦 13. Removing CDNs

Before bundlers we used:

<script src="react.js"></script>
<script src="react-dom.js"></script>


But with npm & bundlers,
we should remove CDNs and install React locally.

🟦 14. Installing React via npm
npm install react


This downloads React into node_modules.

🟦 15. Installing ReactDOM via npm
npm install react-dom


ReactDOM is used to render React elements to the DOM.

🟦 16. Importing React & ReactDOM

In modern React:

import React from "react";
import ReactDOM from "react-dom/client";


Imports work only because bundlers support ES modules.

🟦 17. type="module"

In HTML:

<script type="module" src="App.js"></script>


This tells the browser:

This file uses import/export

It should load as ES module

Parcel automatically handles this.

🟦 18. How Parcel Works (in short)

Parcel:

Bundles your JS/CSS/Images

Converts JSX → JS

Minifies code

Makes it compatible with older browsers

Creates production build

Supports HMR (Hot Reloading)

You don't need any configuration.

🟦 19. browserslist

In package.json:

"browserslist": [
  "last 2 versions"
]


This tells bundlers:

Which browsers your project should support

Helps parcel & babel decide what to transpile

🎉 Episode 2 Summary

✔ Git & GitHub basics
✔ Commit & Push
✔ Bundling and Bundlers
✔ npm & package.json
✔ ~ vs ^
✔ package-lock.json
✔ node_modules & gitignore
✔ Parcel usage
✔ Installing & Importing React
✔ Browserslist