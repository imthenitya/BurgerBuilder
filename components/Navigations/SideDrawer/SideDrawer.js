import React from "react";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Logo from "../Logo/../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Aux from "../../hoc/Auxilary"

const SideDrawer=(props)=>{
    let sideDrawerClasses=["SideDrawer", "close"];
    if(props.show===true){
        sideDrawerClasses=["SideDrawer", "open"]
    }
    console.log(sideDrawerClasses.join(" "))
return(
    <Aux>
<BackDrop show={props.show} clicked={props.hideSideDrawer}/>
    <div className={sideDrawerClasses.join(" ")}>
        <div className="LogoSideDrawer"><Logo/></div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    </Aux>
)
}

export default SideDrawer