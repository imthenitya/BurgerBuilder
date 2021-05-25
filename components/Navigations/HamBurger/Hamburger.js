import React from "react";
import "./Hamburger.css"
const Hamburger=(props)=>{
    return (
        <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
        </div>
    )
}

export default Hamburger;