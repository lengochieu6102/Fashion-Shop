import React from 'react';
function ProductItem(props) {
    var { product } = props;
    return (
        <div className="col-3">
            <div className="card text-center">
                <img className="card-img-top" src={product.image} alt="img" />
                <div className="card-body">
                    <p className="card-text product-name">{product.name}</p>
                    <p className="card-text product-price">{product.price}đ</p>
                </div>
            </div>
        </div>
    );

}

export default ProductItem;
