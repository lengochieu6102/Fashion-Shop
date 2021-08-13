import React, { useEffect } from 'react';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useSelector, useDispatch } from 'react-redux';

function ProductActionPage(props) {
    const editProduct = useSelector(state => state.itemEditing);
    const dispatch = useDispatch();
    const { match } = props;
    const isAddMode= !match;

    useEffect(() => {
        if (match) {
            const id = match.params.id;
            dispatch(actGetProductRequest(id));
        }
    }, [dispatch,match]);


    const handleSubmit = (product) => {
        if (isAddMode) {
            dispatch(actAddProductRequest(product));
        } else {
            dispatch(actUpdateProductRequest(product));
        }
        props.history.goBack();
    }
    return (
        <div className="product-form">
            <h3>{isAddMode ? "Thêm sản phẩm": "Chỉnh sửa sản phẩm"}</h3>
            <ProductForm
                handleSubmit={handleSubmit}
                initialValue={editProduct}
                isAddMode={isAddMode}
            ></ProductForm>
        </div>
    );
}


export default ProductActionPage;
