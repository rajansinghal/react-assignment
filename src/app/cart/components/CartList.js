
import React, {Component} from "react";
import PropTypes from "prop-types";
import CartItem from './CartItem';

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let {items} = this.props;
        return (
           <table>
               <tbody>
               <tr>
                    <th>Name</th>
                    <th>Price</th> 
                    <th>Quantity</th>
                </tr>
                {
                    items.map ( item => (
                        <CartItem key={item.id} 
                                item={item}
                        >
                        </CartItem>
                    ))
                }

            </tbody>
           </table>
        )
    }
} 


CartList.defaultProps = {
    items: []
}

CartList.propTypes = {
    items: PropTypes.array
}