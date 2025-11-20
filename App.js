// const header=document.createElement("h1");
// header.innerHTML="USING JS";
// const root=document.getElementById("root");
// root.appendChild(header);

const header=React.createElement("h1",{
    id:"header",
    class:"Main _ header"
},"Haii Using React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
