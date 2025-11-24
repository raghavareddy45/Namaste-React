import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="../images/zent-logo-png-car-22.png" alt="Zent logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout=()=>(
    <Header/>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
