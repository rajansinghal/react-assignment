
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h4>CartSummary</h4>
            <h5>Count : {this.props.count}</h5>
            <h5>Amount : {this.props.amount}</h5>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}