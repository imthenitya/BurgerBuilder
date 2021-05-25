import React from "react";
import "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Hamburger from "../HamBurger/Hamburger"

const Toolbar=(props)=>{
return (
    <header className="Toolbar">
        <Hamburger clicked={props.clicked}/>
        <div className="LogoToolBar"><Logo/></div>
        
        <nav className="DestopOnly">
            <NavigationItems/>
        </nav>
    </header>
)
}

export default Toolbar;