import React from 'react';

function ProductList(props) {
    return (
        <table className="table text-center">
            <thead className="thead-light">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Mã</th>
                    <th scope="col" className="name-field">Tên sảm phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hoạt động</th>

                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );


}

export default ProductList;