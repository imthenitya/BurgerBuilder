import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../.././Burger/Burger";
import BuildControls from "../.././Burger/BuildControls/BuildControls/BuilldControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary"
import axios from "../../../axios-order";
import Spinner from "../../UI/Spinner/Spinner"

const INGREDIENT_PRICE  ={
            salad: 0.5,
            bacon: 0.6,
            meat: 1.5,
            cheese: 1
}
class BurgerBuilder extends Component{

    state={
        Ingredient:null,
        price: 4,
        purchasable: false,
        purchasing: false,
        hideSideDrawer: true,
        showSpinner: false
    }

CancleOrderHandler=()=>{
        this.setState({
            purchasing: false
        })
    }

    ProceedOrderHandler=()=>{
        this.setState({
            showSpinner: true
        })
        const orderData={
            Ingredient: this.state.Ingredient,
            price: this.state.price,
            customer:{
                name: 'Nityanand',
                email: 'imthenitya@gmail.com',
                country: 'India',
                Payement: 'Cash'
            }
        }
        
    axios.post('/orders.json', orderData).then(res=>{
        this.setState({
            showSpinner: false,
            purchasing: false
        })
    }).catch(error=>{
        this.setState({
            showSpinner: false,
            purchasing: false
        })
    })
    }

PurchasebleCheck =(ing)=>{
    const sum= Object.keys(ing).map((item)=>{
        return ing[item]
    }).reduce((accum,currval)=>{
        return accum+currval
    },0);
    
    this.setState({
        purchasable: sum>0
    })
    
}

PurchasingShow=()=>{
    this.setState({
        purchasing: true
    })
}

AddIngredients=(type)=>{
let OldCount=this.state.Ingredient[type];
let updateCount= OldCount+1;
const UpdatedIngredient={...this.state.Ingredient};
UpdatedIngredient[type]=updateCount;

let currentPrice= this.state.price;
let PriceAdded= INGREDIENT_PRICE[type];
let updatedPrice= currentPrice+ PriceAdded;

this.setState({
    Ingredient: UpdatedIngredient,
    price: updatedPrice
})
this.PurchasebleCheck(UpdatedIngredient)
}

RemoveIngredients=(type)=>{
    let OldCount=this.state.Ingredient[type];
    if(OldCount<=0){
        return
    }
    let updatedCount=OldCount-1;
    let UpdatedIngredient={...this.state.Ingredient};
    UpdatedIngredient[type]=updatedCount;

    let currentPrice= this.state.price;
    let updatedPrice= currentPrice-INGREDIENT_PRICE[type];

    this.setState({
        Ingredient: UpdatedIngredient,
        price: updatedPrice
    })
    this.PurchasebleCheck(UpdatedIngredient)
}
PurchaseCancled=()=>{
    this.setState({
        purchasing: false,
    })
}

CloseSideDrawer=()=>{
this.setState({
    hideSideDrawer: false
})
}

componentDidMount(){
axios.get("https://burgerbuil-default-rtdb.firebaseio.com/Ingredients.json").then(res=>{
    this.setState({
        Ingredient: res.data
    })
})
}



render(){
       
const checkDisabled={...this.state.Ingredient}

for(let key in checkDisabled){
    checkDisabled[key] = checkDisabled[key]<=0;
}

let  orderSummary= <Spinner/>;
let burger= <Spinner/>;
if(this.state.Ingredient){
    orderSummary=<OrderSummary data={this.state.Ingredient} cancleOrder={this.CancleOrderHandler}
proceedOrder={this.ProceedOrderHandler} price={this.state.price}/>
burger=<Burger Ingredient={this.state.Ingredient}/> 
}



if(this.state.showSpinner){
orderSummary= <Spinner/>
}

return(
    <Aux>
        <Modal show={this.state.purchasing}
        modalClosed={this.PurchaseCancled}>
        {orderSummary}
        </Modal>
       {burger}
       <BuildControls addPriceIngredient={this.AddIngredients} removePriceIngredient={this.RemoveIngredients}
       disable={checkDisabled} price={this.state.price} purchasable={this.state.purchasable}
       click={this.PurchasingShow}/>
    </Aux>
)
}}

export default BurgerBuilder;