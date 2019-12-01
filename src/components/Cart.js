import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sumBy } from 'lodash';

import CartItem from './CartItem';
import Notify from './Notify';
import Helpers from './../libs/Helpers';


class Cart extends Component {
    render() {
        let {items}  = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>product</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            { this.showElementBody(items) }
			                { this.showElementFooter(items) }
                           
                        </table>
                    </div>
                </div>
               <Notify/>
            </div>
        );
    }
    showElementBody(items){
		
		let xhtml = null;

		if(items.length > 0 ){
            xhtml = items.map((cartItem, index)=> {
                return (
                    <CartItem key={index + "-" + cartItem.quantity} cartItem={cartItem} index={index} />//chu y index + "-" + cartItem.quantity}khi update
                );
            });
        }
                
		return <tbody id="my-cart-body">{xhtml}</tbody>;
	}
	
	showElementFooter(items){
		
		let xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;
		if(items.length > 0 ){
			let totalQuantity = sumBy(items, 'quantity');
			let totalPrice 	  = sumBy(items, (item) => {
				return item.product.price * item.quantity;
            });
            // let totalPrice = sumBy(items, 'product.price * quantity');

			xhtml = <tr>
                        <td colSpan={4}>There are <b>{ totalQuantity }</b> items in your shopping cart.</td>
                        <td colSpan={2} className="total-price text-left">
                        	{Helpers.toCurrency(totalPrice, "$", "left")} 
                        </td>
                    </tr>
		}
		return <tfoot id="my-cart-footer">{xhtml}</tfoot>;     	
	};
}

const mapStateToProps = state => {
    return {
        items: state.carts
    }
}

export default connect(mapStateToProps, null)(Cart);