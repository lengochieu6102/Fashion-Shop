import * as Types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('cart'));

const cart = (state = data ? data : [], action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.UPDATE_QUANTITY_ITEM:
            index = state.findIndex(item => item.product.id === product.id)
            state[index].quantity = quantity;
            return [...state];
        case Types.ADD_TO_CART:
            index = state.findIndex(item => item.product.id === product.id)
            if (index === -1) {
                //Add new
                state.push({
                    product: product,
                    quantity: quantity,
                });
            } else {
                // increase quantity
                state[index].quantity += quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case Types.DELETE_ITEM_CART:
            index = state.findIndex(item => item.product.id === action.id)
            state.splice(index,1);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default cart;