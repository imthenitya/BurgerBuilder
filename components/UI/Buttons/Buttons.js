import React from "react";
import "./Buttons.css"

const Buttons=(props)=>{
    return <button className={["Button",props.btnType].join(" ")} onClick={props.click}>{props.children}</button>
}
export default Buttons;