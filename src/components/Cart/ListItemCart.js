import React from 'react';


function ListItemCart(props) {


    return (
        <table className="table text-center">
            <thead className="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="name-field">Tên sảm phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.children}        
            </tbody>
        </table>
    );
}

export default ListItemCart;