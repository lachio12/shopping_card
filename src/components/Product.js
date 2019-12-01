import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

class Product extends Component {
    render() {
        return (
            <div className="col-md-9">
                <div>
                <ol className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">Electronics</li>
                </ol>
                </div>
                <div className="row">
                    <ProductList/>
                    <Cart/>
                </div>
            </div>
            
        );
    }
}

export default Product;