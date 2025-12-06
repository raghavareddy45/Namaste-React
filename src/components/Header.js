import { logoUrl } from "../utils/constants";
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
export default Header;