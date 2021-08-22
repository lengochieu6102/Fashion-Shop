import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CartPage from './pages/CartPage/CartPage';

const routes= [
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage/>
    },
    {
        path: '/login',
        exact: false,
        main: ()=> <LoginPage/>
    },
    {
        path: '/product-manager',
        exact: false,
        main: ()=> <ProductListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history})=> <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match,history})=> <ProductActionPage match={match} history={history}/>
    },
    {
        path: '/cart',
        exact: false,
        main: ()=> <CartPage/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFoundPage/>
    },

];

export default routes;