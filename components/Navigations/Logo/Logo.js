import React from "react";
import burgerLogo from "../../../assests/burger-logo.png";
import "./Logo.css"

const Logo = (props)=>(
    <div className="Logo">
    <img src={burgerLogo} alt="Logo"/>
    </div>
)

export default Logo;