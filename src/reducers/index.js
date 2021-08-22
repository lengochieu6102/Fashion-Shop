import { combineReducers } from "redux";
import products from './products';
import itemEditing from './itemEditing';
import cart from './cart';

const appReducers = combineReducers({
    products,
    itemEditing,
    cart,
})

export default appReducers;