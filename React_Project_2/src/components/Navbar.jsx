import React from "react";
import Logo from "../images/logo.png"

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src={Logo} />
            </div>

            <ul className="nav-ul">
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Services</li>
                <button className="nav-btn">Sing Up</button>
            </ul>
        </nav>
    )      
}