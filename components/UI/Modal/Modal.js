import React, { Component } from "react";
import "./Modal.css";
import BackDrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/Auxilary";

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show || nextProps.children!==this.props.children){
            return true;
        }
        else{
            return false;
        }
    }
    render(){
        return(
            <Aux>
            <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div className="Modal"
            style={{transform: this.props.show ? 'translateY(0)': 'translateY(-1000vh)',
            opacity: this.props.show ? '1' : '0'}}>
                {this.props.children}
            </div>
            </Aux>
        )
    }
}



export default Modal;