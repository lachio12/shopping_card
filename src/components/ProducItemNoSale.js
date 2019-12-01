import React, { Component } from 'react';

class ProducItemNoSale extends Component {
    render() {
        return (
            <div className="media product">
                        <div className="media-left">
                            <a href="http://localhost:3000/">
                            <img className="media-object" src="images/iphone 5.jpg" alt="charmander" />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">iphone 5</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                            <span className="price"> 12 USD</span>
                        </div>
                    </div>
        );
    }
}

export default ProducItemNoSale;