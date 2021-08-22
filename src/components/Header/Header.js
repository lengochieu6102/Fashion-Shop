import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { NavLink, Link } from "react-router-dom";
import firebase from 'firebase';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

const menus = [
    {
        name: "Sản phẩm",
        to: '/',
        exact: true,
    },
    {
        name: "Quản lý sản phẩm",
        to: '/product-manager',
        exact: false,
    },

]


function Header(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const location = useLocation();
    const cart=useSelector(state => state.cart);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])

    function showMenu(menus) {
        var result = null;
        result = menus.map((menu, index) => {
            return (
                <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={menu.to} exact={menu.exact}>{menu.name}</NavLink>
                </li>
            )
        })
        return result;
    }
    function handleLogout() {
        if (window.confirm("Bạn muốn đăng xuất khỏi tài khoản?")) {
            firebase.auth().signOut();
        }
        localStorage.removeItem('user');
        setUser(null);
    }

    function showInfoCart(){
        if (cart.length >0){
            var total=0;
            for (var i = 0;i<cart.length;i++){
                total+=cart[i].quantity;
            }
            return total;
        }
        return;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
            <NavLink className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                FaShop
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {showMenu(menus)}
                </ul>
            </div>
            <div>
                <Link className="cart btn btn-info" to='/cart'>Giỏ hàng <i className="fas fa-cart-plus"></i> <span className="badge badge-dark">{showInfoCart()}</span></Link>
            </div>
            {user ? (
                <div className="profile">
                    <img src={user.photoURL} alt="avatar" className="avatar nav-item"></img>
                    <h6 className="userName">{user.displayName}</h6>
                    <div className=" btn btn-primary " onClick={handleLogout}>Đăng xuất <i className="fas fa-sign-out-alt"></i></div>
                </div>
            )
                : (<Link className="btn btn-primary" to='/login'>Đăng nhập <i className="fas fa-sign-in-alt"></i></Link>)
            }

        </nav>
    );
}

export default Header;
