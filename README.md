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
📘 React Notes — Episode 3
package.json Scripts • JSX • Transpilation • Components
🟦 1. package.json — Scripts Section

package.json allows us to define scripts that we can run using npm.

Example:

{
  "name": "react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}

⭐ What this means:
start
npm start


Runs:

parcel index.html


Starts development server (auto refresh, HMR).

build
npm run build


Runs:

parcel build index.html


Creates a production build:

Minified

Optimized

Browser-compatible files

🟦 2. Why we need scripts instead of typing commands manually?

Before scripts, we used:

npx parcel index.html


After adding "start" script:

npm start


Benefits:

Shorter commands

Easy for teammates

Works the same across all systems

Used by deployment platforms

🟦 3. What is JSX?

JSX = JavaScript XML
It allows us to write HTML-like code inside JavaScript.

Example (JSX):
const element = <h1>Hello React</h1>;

JSX is NOT HTML

Browser cannot understand JSX

It must be transpiled to JavaScript

🟦 4. How Transpilation Works

Transpilation = converting JSX → pure JavaScript
Parcel uses Babel under the hood.

JSX Input:
const element = <h1>Hello React</h1>;

Babel Output:
const element = React.createElement("h1", null, "Hello React");


Then React converts the virtual DOM object → real DOM node.

🟦 5. HTML vs JSX
Feature	HTML	JSX
Syntax	Pure HTML	HTML+JavaScript
Can use dynamic values?	❌	✔️ { } expressions
Browser understands?	✔️	❌ must be transpiled
Styling	attributes	camelCase (className)
Closes tags automatically?	✔️	❌ must close every tag
Example Differences
HTML:
<div class="box"></div>

JSX:
<div className="box"></div>

🟦 6. What is a React Component?

A component is a reusable UI block.
Think of it like a function that returns UI.

React apps = multiple small components combined together.

🟦 7. Types of Components

There are 2 main types:

⭐ A. Functional Component (Modern & Recommended)

A functional component is just a JavaScript function returning JSX.

Example:
function Header() {
  return <h1>This is a Functional Component</h1>;
}


Characteristics:

Simple to write

Uses hooks (useState, useEffect, etc.)

Faster & clean

⭐ B. Class Component (Older Method)

Class components were used before hooks existed.

Example:
class Header extends React.Component {
  render() {
    return <h1>This is a Class Component</h1>;
  }
}


Characteristics:

Uses render() method

Lifecycle methods (componentDidMount, etc.)

More code, not recommended for new projects

🟦 8. Component Composition

Component Composition = Using one component inside another.

This is how we build complex UIs from small pieces.

Example:
function Header() {
  return <h1>Header Section</h1>;
}

function Body() {
  return <p>This is the body</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}


App is composed of:

Header componentS

Body component

This is the real power of React — small reusable parts → big applications.

🎉 Episode 3 Summary

✔ package.json scripts (start, build)
✔ Why npm start works
✔ JSX
✔ Transpilation process
✔ HTML vs JSX
✔ React Components
✔ Functional Components
✔ Class Components
✔ Component Composition

EPISODE 4

🏗 First App Structure

We built a basic layout:

Header

Logo

Nav list (Home, About, etc.)

Body

Search box

Card container (list of restaurants)

Individual restaurant cards

Footer

Some text / links

In code, something like:

const Header = () => (
  <div className="header">
    <div className="logo">Logo</div>
    <ul className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-list">
      {/* Cards will come here */}
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <p>© 2025 Food App</p>
  </div>
);

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);


This is the skeleton of your app.

🧱 Container Composition

Component Composition = building big UIs using small components.

AppLayout contains Header, Body, and Footer.

Body contains a list container, which contains cards.

Cards are separate components that are reused.

Example:

const ResCard = ({ resData }) => (
  <div className="res-card">
    <h3>{resData.name}</h3>
    <p>{resData.cuisines.join(", ")}</p>
  </div>
);

const Body = () => (
  <div className="res-list">
    {resList.map((res) => (
      <ResCard key={res.id} resData={res} />
    ))}
  </div>
);


👉 This is container composition:

Body is a container component.

ResCard is a child/presentational component.

🧩 Modularity

Modularity means splitting your UI and logic into small, reusable pieces.

Why?

Easy to read

Easy to debug

Easy to reuse

Easy to test

Example structure:

src/
  components/
    Header.js
    Body.js
    Footer.js
    ResCard.js
  utils/
    mockData.js
  App.js


Instead of writing everything in App.js, we modularize into small files.

📦 Props (Properties)

Props = data passed from parent to child.

Think of it like function parameters.

const ResCard = ({ resData }) => {
  return (
    <div className="res-card">
      <h3>{resData.name}</h3>
      <p>{resData.cuisines.join(", ")}</p>
    </div>
  );
};

// Parent
<ResCard resData={resList[0]} />


resData is a prop.

ResCard does not own the data; it just displays it.

Props make components reusable and dynamic.

💉 Dynamic Data Injection

Instead of hardcoding:

<h3>Paradise Biryani</h3>


We inject data dynamically:

<h3>{resData.name}</h3>
<p>{resData.costForTwo}</p>
<p>{resData.avgRating} ⭐</p>


Now the same ResCard component works for:

Paradise

KFC

Domino’s

Barbeque Nation
…just based on the data you pass.

That’s “dynamic data injection” using props.

🔁 Using map to Render Multiple Cards

You don’t manually write:

<ResCard resData={resList[0]} />
<ResCard resData={resList[1]} />
<ResCard resData={resList[2]} />
...


You use .map():

const Body = () => {
  return (
    <div className="res-list">
      {resList.map((res) => (
        <ResCard key={res.id} resData={res} />
      ))}
    </div>
  );
};


.map() loops through resList.

For each res, it returns a <ResCard />.

This is how we generate UI from data.

This is one of the most important patterns in React:
Data → map → Components.

🔑 What is key in React & Why is it Important?

When you do:

{resList.map((res) => (
  <ResCard key={res.id} resData={res} />
))}


The key prop:

Helps React identify each element uniquely.

Used by React’s reconciliation algorithm (diffing).

When the list changes (add/remove/reorder), React uses key to:

Know which item is which

Avoid re-rendering everything unnecessarily

Update only what changed → better performance and fewer UI bugs

You’ll often get this warning without key:

Warning: Each child in a list should have a unique "key" prop.

So, key is required whenever rendering lists.

🚫 Why not use index as key?

Example (not recommended):

{resList.map((res, index) => (
  <ResCard key={index} resData={res} />
))}


This seems fine, but causes issues when:

The list order changes (sorting)

You insert/delete an item in middle

React thinks items with the same index are the “same” component

Result:

Wrong items may keep old state.

Weird UI bugs: wrong data in wrong card, flickering, etc.

👉 Using index as key is only somewhat okay when:

List is static

No add/remove/reorder

No local state in children
But as a good habit: avoid it.

✅ What to Use as key Then?

Use something that is unique and stable, like:

id from your data → ✅ best

{resList.map((res) => (
  <ResCard key={res.id} resData={res} />
))}


If you don’t have an id, create one in your data.

In your resList, you already have:

id: "378345"


Perfect for key.

TL;DR – Quick Exam / Interview Style Notes 😄

Structure: Header, Body, Footer → app layout.

Component Composition: Big components contain smaller components.

Modularity: Split code into multiple small components/files.

Props: Data passed from parent → child. Makes components reusable & dynamic.

Dynamic data injection: Use {} to render data like {resData.name} instead of hardcoding.

map: Used to loop over an array and generate a list of components.

key:

Special prop for list items.

Helps React track items between renders.

Improves performance & prevents wrong updates.

Don’t use index as key:

Breaks when list changes (add/remove/reorder).

Can cause bugs with component state.

Use unique ids as key (like res.id).