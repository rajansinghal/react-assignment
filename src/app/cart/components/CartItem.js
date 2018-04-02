
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props, context) {
        super(props);
        
        this.state = {
            qty : props.item.qty
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let {item} = this.props;
        return (
           <tr>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>{item.qty}</td>
           </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}