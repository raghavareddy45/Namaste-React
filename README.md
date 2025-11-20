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