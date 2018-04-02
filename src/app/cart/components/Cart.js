import React, {Component} from "react";
import PropTypes from "prop-types";
import CartSummary from "./CartSummary";
import CartList from "./CartList";

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }

        this.props.actions.addItemToCart(item);
    }
    
    render() {
        return (
            <div> 
            <h2>Cart</h2>
            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
            <CartList items = {this.props.items}>
            </CartList>
            
            <CartSummary count = {this.props.count}
            amount ={this.props.amount}/>
            </div>
        )
    }
} 


Cart.defaultProps = {
    items: [],
    count:0,
    amount: 0
}

Cart.propTypes = {
    
}