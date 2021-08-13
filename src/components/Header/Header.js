import React from 'react';
import logo from '../../logo.svg';
import { NavLink } from "react-router-dom";

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
    }
]

function Header(props) {
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
        </nav>
    );
}

export default Header;
