import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Buttons from "../../UI/Buttons/Buttons"

class OrderSummary extends Component{
    componentWillUpdate(){
        console.log("[OrderSummary.js] ComponentwillUpdate")
    }
    render(){
        const data= this.props.data;
        const ingredientsOrder= Object.keys(this.props.data).map((item)=>{
          
            return <li key={item}><span style={{textTransform: "capitalize"}}>{item}</span> : {data[item]}</li>
        })
        return(  <Aux>
            <h1>Your Order</h1>
            <p>A delicious Burger with following ingredients:</p>
            <ul>{ingredientsOrder}</ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Buttons btnType="Danger" click={this.props.cancleOrder}>Cancle</Buttons>
            <Buttons btnType="Success" click={this.props.proceedOrder}>Success</Buttons>
            </Aux>)
    }
}

export default OrderSummary;