import React from "react";
import ReactDOM from "react-dom/client";

//Functional Component is a noraml js function that returns jsx/react componenet
const Title=()=>(
    <h1>It is a title</h1>
);

const HeadingComponent=()=>(
    <div>
        <Title/>
        <h2>From Heading Componet</h2>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
