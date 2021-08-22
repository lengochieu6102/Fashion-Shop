import React from 'react';
import CartResult from '../../components/Cart/CartResult';
import ItemCart from '../../components/Cart/ItemCart';
import ListItemCart from '../../components/Cart/ListItemCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartPage(props) {
    const cart = useSelector(state => state.cart);

    function showCartItem(cart) {
        var result = null;
        result = cart.map((item, index) => <ItemCart item={item} key={index} />);
        return result;
    }

    return (
        <div className="cart-page">
            {cart.length !== 0 ?
                (
                    <>
                        <ListItemCart>
                            {showCartItem(cart)}
                            <CartResult cart={cart} />
                        </ListItemCart>
                        
                    </>
                )
                : (<h3 className="text-center">Giỏ hàng trống <Link to='/'>Mua hàng ngay</Link></h3>)
            }
        </div>
    );
}

export default CartPage;