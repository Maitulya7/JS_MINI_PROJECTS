import React from "react";
import Logo from "../public/images/logo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo}/>

            <ul className="nav-items">
                <li>Male</li>
                <li>Female</li>
                <li>Sale</li>
                <li>Shops</li>
            </ul>
        </nav>
    )
}