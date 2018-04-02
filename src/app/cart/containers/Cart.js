import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Cart from '../components/Cart';

import * as actions from '../state/actions'
import CartItem from '../components/CartItem';



const mapStateToProps = (state) => {
    console.log(state);
    return {
         items: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(actions);
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)