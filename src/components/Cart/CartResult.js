import React from 'react';

function CartResult(props) {
    const cart=props.cart;
    function showTotal(){
        var total=0;
        for (var i=0;i<cart.length;i++){
            total +=cart[i].product.price*cart[i].quantity;
        }
        return total;
    }

    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{showTotal()} đ</strong>
                </h4>
            </td>
        </tr>

    );
}

export default CartResult;