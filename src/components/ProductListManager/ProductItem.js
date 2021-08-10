import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var productStatus = product.status ? "Còn hàng" : "Hết hàng";
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price} đ</td>
                <td>{productStatus}</td>
                <th>
                    <button type="button" className="btn btn-warning mr-2">Chỉnh sửa</button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={()=>this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </th>
            </tr>
        );
    }

    onDelete =(id)=>{
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')){
            this.props.onDelete(id);
        }
    }

}

export default ProductItem;