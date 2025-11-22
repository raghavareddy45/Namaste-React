import React from "react";
import ReactDOM from "react-dom/client";

// const header=React.createElement("h1",{
//     id:"header",
//     class:"Main _ header"
// },"Haii Using React");
const header=<h1>From Jsx</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
