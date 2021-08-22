import * as Types from '../constants/ActionTypes';
var initialState=[];

const products=(state=initialState,action)=>{
    var index=-1;
    switch(action.type){
        case Types.FETCH_PRODUCTS:
            state=action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index=state.findIndex((product)=>product.id===action.id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUCT:
            return [...state].push(action.product);
        case Types.UPDATE_PRODUCT:
            index=state.findIndex((product)=>product.id===action.product.id);
            state[index]=action.product;
            return [...state];
        default:
            return [...state];
    }
}

export default products;