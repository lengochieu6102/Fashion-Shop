import React from 'react';
import { useDispatch } from 'react-redux';
import { actRemoveItemCart, actUpdateQuantity } from '../../actions/index';

function ItemCart(props) {
    const { product, quantity } = props.item;
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(actRemoveItemCart(id));
    }

    function updateQuantity(product, quantity) {  
        if (quantity > 0) {
            dispatch(actUpdateQuantity(product, quantity));
        }
    }

    return (
        <tr>
            <th scope="row">
                <img src={product.image} alt="" width="100" className="img-fluid z-depth-0" />
            </th>
            <td className="align-middle">{product.name}</td>
            <td className="align-middle">{product.price} đ</td>
            <td className="align-middle">
                <span className="pr-2">{quantity}</span>
                <div className="btn-group" data-toggle="buttons">
                    <label
                        className="btn btn-sm btn-primary btn-rounded "
                        onClick={() => updateQuantity(product, quantity - 1)}
                    >
                        <i className="fas fa-minus"></i>
                    </label>
                    <label
                        className="btn btn-sm btn-primary btn-rounded"
                        onClick={() => updateQuantity(product, quantity + 1)}
                    >
                        <i className="fas fa-plus"></i>
                    </label>
                </div>
            </td>
            <td className="align-middle">{quantity * product.price}</td>
            <td className="align-middle">
                <button
                    type="button"
                    className="btn btn-sm btn-danger waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title=""
                    data-original-title="Remove item"
                    onClick={() => removeItemCart(product.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
}

export default ItemCart;