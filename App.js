import React from "react";
import ReactDOM from "react-dom/client";
const Header=()=>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/UvLlcWW77_xJ4tIcJrMpnVAmJkW-kRX9oqRPKXo_87w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/Mjc4MDU5NDkvZmls/ZS9vcmlnaW5hbC1j/NDM4MmUwODYwM2Nm/OTVkY2UyNzE2M2Q5/MzMwNzczMy5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy" alt="Zent logo"/>
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
const ResCard=()=>{
    return(
        <div className="res-card">
            <div className="img-container">
                <img className="img" src="https://imgs.search.brave.com/fFHDmhyUDWc73oe6vif_XT22WVUcprB64XDbPpj8lfY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvbjdu/WDRMeng2cG5xNlRx/ZWF5NVNkYjNieTNJ/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/X19vcHRfX2Fib3V0/Y29tX19jb2V1c19f/cmVzb3VyY2VzX19j/b250ZW50X21pZ3Jh/dGlvbl9fc2VyaW91/c19lYXRzX19zZXJp/b3VzZWF0cy5jb21f/XzIwMjBfXzA3X18y/MDIwMDcxNS1sYW1i/LWJpcnlhbmktbmlr/LXNoYXJtYS05LTI4/NWVkOTI0NzI1YTRj/YTU5OGMzNzJlMTlk/MzNiMzBkLmpwZw"></img>
            </div>
            <h3>mehfil</h3>
        </div>
    );
}
const Body=()=>{
    return (
        <div className="body-container">
            <div className="search">search</div>
            <div className="res-list">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    );
}

const AppLayout=()=>(
    <div>
        <Header/>
        <Body/>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
