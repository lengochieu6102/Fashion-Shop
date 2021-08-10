import React, { Component } from 'react';
import ProductList from '../../components/ProductListView/ProductList';
import ProductItem from '../../components/ProductListView/ProductItem';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from '../../actions/index';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <div className="home-page">
                <ProductList>
                    {this.showListProduct(products)}
                </ProductList>
            </div>
        );
    }

    showListProduct = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                />
            )
        })
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
