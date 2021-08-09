import React, { Component } from 'react';
import ProductList from '../../components/ProductListView/ProductList';
import ProductItem from '../../components/ProductListView/ProductItem';

class HomePage extends Component {
    render() {
        var products = [
            {
                "name": "Mens 100% Cotton Seam Detail Double Pocket Solid Casual Long Sleeve Shirt",
                "price": 200000,
                "status": true,
                "image": "https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/86/CF/8e6b3c56-87b3-49ce-aea8-d524df4e7339.jpg?s=360x480",
                "id": "1"
            },
            {
                "name": "Mens Color Block Geo Print Cotton Linen Short Sleeve Shirts",
                "price": 250000,
                "status": true,
                "image": "https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/A5/B8/db37ea7a-80b9-4ce5-8676-25e7196f8946.jpeg?s=360x480",
                "id": "2"
            },
            {
                "name": "Mens 100% Cotton Double Flap Pocket Solid Casual Long Sleeve Shirts",
                "price": 12,
                "status": true,
                "image": "https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/31/C4/09268f6b-13a2-4391-9332-59503c70465a.jpg?s=360x480",
                "id": "3"
            },
        ]
        return (
            <div className="home-page">
                <ProductList>
                    {this.showListProduct(products)}
                </ProductList>
            </div>
        );
    }

    showListProduct=(products)=>{
        var result=null;
        result = products.map((product,index)=>{
            return(
                <ProductItem
                    key={index}
                    product={product}
                />
            )
        })
        return result;
    }
}

export default HomePage;
