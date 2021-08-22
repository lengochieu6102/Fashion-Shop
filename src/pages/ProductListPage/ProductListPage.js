import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductList from '../../components/ProductListManager/ProductList';
import ProductItem from '../../components/ProductListManager/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';


function ProductListPage(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actFetchProductsRequest());
    }, [dispatch]);

    const onDelete = (id) => {
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
            {products.length === 0 ? (
                <h3>Không có sản phẩm nào trong cửa hàng <Link to="/product/add">Thêm sản phẩm ngay</Link></h3>
            ) : (<>
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <Link className="btn btn-primary mb-1" to="/product/add"><i className="fas fa-plus"></i> Thêm sản phẩm</Link>
                <ProductList>
                    {showProductManager(products)}
                </ProductList>
            </>
            )}

        </div>
    );
}

export default ProductListPage;
