import React from 'react';

function ProductList(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    );


}

export default ProductList;
