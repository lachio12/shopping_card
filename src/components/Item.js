import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';


const menus = [
	{to: '/phone'		, exact: true, name: 'Mobile', count:234},
	{to: '/computer'	, exact: true, name: 'Computers',count:244},
	{to: '/tablet'	, exact: false, name: 'Tablets', count:112},
	{to: '/app', exact: true, name: 'Appliances', count:201}
];

const MenuLink = ({ menu }) => {
	return (
		<Route 
			path={menu.to} 
			exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						let active = (match !== null) ? "active" : "";
						return (
							
                            <li className={`list-group-item ${active}`}>
                            <Link to={menu.to} >
									{menu.name}
							</Link>
                            <span className="label label-success pull-right">{menu.count}</span>
                            </li>
						)
					}
				}
		/>
	)
}

class Item extends Component {
    render() {
        return (
            <div className="col-md-3">
                    <div>
                    <Link to="/" className="list-group-item active" >
                    Electronics
                    
					</Link>
                   
                    <ul className="list-group">
                    {this.showMenusTwo(menus)}
                    </ul>
                    </div>
                    {/* /.div */}
                    <div>
                    <a href="/" className="list-group-item active list-group-item-success">Clothing &amp; Wears
                    </a>
                    <ul className="list-group">
                        <li className="list-group-item">Men's Clothing
                        <span className="label label-danger pull-right">300</span>
                        </li>
                        <li className="list-group-item">Women's Clothing
                        <span className="label label-success pull-right">340</span>
                        </li>
                        <li className="list-group-item">Kid's Wear
                        <span className="label label-info pull-right">735</span>
                        </li>
                    </ul>
                    </div>
                    {/* /.div */}
                    <div>
                    <a href="/" className="list-group-item active">Accessaries &amp; Extras
                    </a>
                    <ul className="list-group">
                        <li className="list-group-item">Mobile Accessaries
                        <span className="label label-warning pull-right">456</span>
                        </li>
                        <li className="list-group-item">Men's Accessaries
                        <span className="label label-success pull-right">156</span>
                        </li>
                        <li className="list-group-item">Women's Accessaries
                        <span className="label label-info pull-right">400</span>
                        </li>
                        <li className="list-group-item">Kid's Accessaries
                        <span className="label label-primary pull-right">89</span>
                        </li>
                        <li className="list-group-item">Home Products
                        <span className="label label-danger pull-right">90</span>
                        </li>
                        <li className="list-group-item">Kitchen Products
                        <span className="label label-warning pull-right">567</span>
                        </li>
                    </ul>
                    </div>
                    {/* /.div */}
                    <div>
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-success"><a href="/">New Offer's Coming </a></li>
                        <li className="list-group-item list-group-item-info"><a href="/">New Products Added</a></li>
                        <li className="list-group-item list-group-item-warning"><a href="/">Ending Soon Offers</a></li>
                        <li className="list-group-item list-group-item-danger"><a href="/">Just Ended Offers</a></li>
                    </ul>
                    </div>
                   
                </div>
        );
    }

    showMenusTwo(menus){
    	let xhtml = null;
		
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}
	
    	return xhtml;
    }
}

export default Item;