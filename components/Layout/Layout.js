import React, { Component } from "react";
import Aux from ".././hoc/Auxilary.js";
import Toolbar from "../Navigations/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigations/SideDrawer/SideDrawer"


class Layout extends Component{

state={
    showSideDrawer:false
}

HideSideDrawer=()=>{
this.setState({
    showSideDrawer:false
})
}

ShowSideDrawer=()=>{
    this.setState({
        showSideDrawer: !this.state.showSideDrawer
    })
}
    render(){
        return(
            <Aux>
            <div><Toolbar clicked={this.ShowSideDrawer}/>
            <SideDrawer show={this.state.showSideDrawer} hideSideDrawer={this.HideSideDrawer}/></div>
            <main className="Content">
                {this.props.children}
            </main>
            </Aux>
        )
    }
}

export default Layout;