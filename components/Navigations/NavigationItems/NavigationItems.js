import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem"

const NavigationItems=(props)=>{
return (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Order Items</NavigationItem>
    </ul>
)
}

export default NavigationItems;