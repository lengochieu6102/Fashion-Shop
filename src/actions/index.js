import * as Types from '../constants/ActionTypes';
import callAPI from '../utils/callAPI';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('Products', 'get', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products,
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`Products/${id}`,'delete',null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id)=>{
    return {
        type: Types.DELETE_PRODUCT,
        id,
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('Products','post',product).then(res =>{
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (product)=>{
    return {
        type: Types.ADD_PRODUCT,
        product,
    }
}

export const actGetProductRequest = (id)=>{
    return (dispatch) => {
        return callAPI(`Products/${id}`,'get',null).then(res=>{
            dispatch(actGetProduct(res.data));
        });
    }
}

export const actGetProduct = (product)=>{
    return {
        type: Types.EDIT_PRODUCT,
        product,
    }
}

export const actUpdateProductRequest = (product)=>{
    return (dispatch) => {
        return callAPI(`Products/${product.id}`,'put',product).then(res=>{
            dispatch(actUpdateProduct(res.data));
        });
    }
}

export const actUpdateProduct = (product)=>{
    return {
        type: Types.UPDATE_PRODUCT,
        product,
    }
}