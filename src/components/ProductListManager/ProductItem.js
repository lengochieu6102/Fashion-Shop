import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {

    var { product, index } = props;
    var productStatus = product.status ? "Còn hàng" : "Hết hàng";
    
    const onDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            props.onDelete(id);
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{product.id}</th>
            <td>{product.name}</td>
            <td>{product.price} đ</td>
            <td>{productStatus}</td>
            <th>
                <Link
                    className="btn btn-warning mr-2"
                    to={`/product/${product.id}/edit`}
                >
                    Chỉnh sửa
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(product.id)}
                >
                    Xóa
                </button>
            </th>
        </tr>
    );



}

export default ProductItem;