import React from 'react';
import ProductList from '../../components/ProductListView/ProductList';
import ProductItem from '../../components/ProductListView/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchProductsRequest } from '../../actions/index';
import { useEffect } from 'react';

function HomePage(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchProductsRequest());
    }, [dispatch])

    function showListProduct(products) {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                />
            )
        })
        return result;
    }

    return (
        <div className="home-page">
            <ProductList>
                {showListProduct(products)}
            </ProductList>
        </div>
    );
}

export default HomePage;
