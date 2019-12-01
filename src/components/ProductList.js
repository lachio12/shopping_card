import React, { Component } from 'react';
import {connect}  from 'react-redux';

import ProducItem from './ProducItem';
import ProducItemNoSale from './ProducItemNoSale';
import  * as configs from './../constants/Config';


class ProductList extends Component {
    render() {
        let {products}=this.props;
      
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="panel panel-primary panel_left">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* PRODUCT : START */}
                    { this.showElementProducts(products)}
                        {/* PRODUCT : END */}
                        {/* PRODUCT : START */}
                        <ProducItemNoSale/>
                        
                    </div>
                </div>
        </div>
        );
    }
    showElementProducts(products){
        let xhtml= <b>{configs.NOTI_EMPTY_PRODUCT}</b>
        if(products.length>0){
            xhtml=products.map((product,index)=>{
                return( 
                  <  ProducItem key={index} product={product} index={index}/>
                );
            });
        }
        return xhtml
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
 export default connect(mapStateToProps,null)(ProductList)
