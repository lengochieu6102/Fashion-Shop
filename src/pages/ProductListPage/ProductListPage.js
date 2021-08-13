import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductList from '../../components/ProductListManager/ProductList';
import ProductItem from '../../components/ProductListManager/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

function ProductListPage(props) {
    const products=useSelector(state => state.products);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(actFetchProductsRequest());
    }, [dispatch]);

    const onDelete=(id)=>  {
        dispatch(actDeleteProductRequest(id));
    }

    function showProductManager(products) {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    index={index}
                    product={product}
                    onDelete={onDelete}
                />
            )
        })
        return result;
    }

    return (
        <div className="product-list-manager">
            <ProductList>
                {showProductManager(products)}
            </ProductList>
            <Link className="btn btn-primary" to="/product/add">Thêm sản phẩm</Link>
        </div>
    );
}

export default ProductListPage;
