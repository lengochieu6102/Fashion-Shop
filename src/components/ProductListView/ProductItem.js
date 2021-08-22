import React from 'react';
import {useDispatch} from 'react-redux';
import {actAddToCart} from '../../actions/index';

function ProductItem(props) {
    var { product } = props;
    const dispatch = useDispatch();
    function handleAddToCart(product){
        dispatch(actAddToCart(product,1));
    }

    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card text-center">
                <img className="card-img-top" src={product.image} alt="img" />
                <div className="card-body">
                    <p className="card-text product-name">{product.name}</p>
                    <p className="card-text product-price">{product.price}đ</p>
                    {product.status?
                    (
                        <button className="btn btn-primary mb-1" onClick={()=>handleAddToCart(product)}><i className="fas fa-shopping-basket"></i> Mua hàng </button>
                    ):
                    (
                        <button className="btn btn-danger mb-1" disabled><i className="fas fa-shopping-basket"></i> Hết hàng </button>
                    )}
                </div>
            </div>
        </div>
    );

}

export default ProductItem;
