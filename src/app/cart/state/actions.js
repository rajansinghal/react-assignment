import * as ActionTypes from './ActionTypes'

export const addItemToCart = (product)=>{
return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload :{
        item:{
            id:product.id,
            name:product.name,
            qty:product.qty || 1,
            price:product.price
        }
    }
}
}