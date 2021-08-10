import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProductList from '../../components/ProductListManager/ProductList';
import ProductItem from '../../components/ProductListManager/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <div className="product-list-manager">
                <ProductList>
                    {this.showProductManager(products)}
                </ProductList>
                <Link className="btn btn-primary" to="/product/add">Thêm sản phẩm</Link>
            </div>
        );
    }

    showProductManager = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    index={index}
                    product={product}
                    onDelete={this.onDelete}
                />
            )
        })
        return result;
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
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
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
