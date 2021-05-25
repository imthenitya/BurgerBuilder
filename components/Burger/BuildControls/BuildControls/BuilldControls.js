import React from "react";
import BuildControl from "../BuildControl/BuildControl";
import "./BuildControls.css";

const BuildControls=(props)=>{

    const controls=[
        {label: "Salad", type: "salad"},
        {label: "Bacon", type: "bacon"},
        {label: "Meat", type: "meat"},
        {label: "Cheese", type: "cheese"}
    ]

let pricetext="Base Price:";
if(props.price>4){
    pricetext="Total Price"
}
    return(
        <div className="BuildControls">
        <p>{pricetext} <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(item=> <BuildControl label={item.label} 
        key={item.label} 
        added={()=>props.addPriceIngredient(item.type)} 
        remove={()=>props.removePriceIngredient(item.type)}
        disableBtn={props.disable[item.type]}/>)}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.click}><strong>Order Now</strong></button>
        </div>
    )
}
export default BuildControls;