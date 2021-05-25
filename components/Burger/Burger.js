import React from "react";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const Burger=(props)=>{
    
    let transformedIng= Object.keys(props.Ingredient).map(item=>{
        return [...Array(props.Ingredient[item])].map((_, i)=>{ // This is very important to understand. I am not clear about this concept
           
            return <BurgerIngredient key={item + i} type={item}/> // Here passing props to component
         });
    
    }).reduce((accum, currval)=>{
        return accum.concat(currval)
    },[])
    if(transformedIng.length===0){
        transformedIng="Please add some ingredients"
    }
    console.log(transformedIng)
return(
    
    <div className="Burger">
       <BurgerIngredient type="bread-top"/>
        {transformedIng}                {/*In line 10 it is passing props to another component */}
       <BurgerIngredient type="bread-bottom"/>
       
    </div>
)
}

export default Burger;