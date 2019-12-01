import React, { Component } from 'react';

class ProductListPhone extends Component {
    render() {
        return (
            <div className="col-md-9">
                <div>
                    <ol className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">Phone</li>
                    </ol>
                </div>
                {/* /.div */}
                <div className="row">
                    <div className="btn-group alg-right-pad">
                    <button type="button" className="btn btn-default"><strong>1235</strong>items</button>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                        Sort Products &nbsp;
                        <span className="caret" />
                        </button>
                        <ul className="dropdown-menu">
                        <li><a href="/">By Price Low</a></li>
                        <li className="divider" />
                        <li><a href="/">By Price High</a></li>
                        <li className="divider" />
                        <li><a href="/">By Popularity</a></li>
                        <li className="divider" />
                        <li><a href="/">By Reviews</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* /.row */}
                <div className="row">
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/dummyimg.png" alt="" />
                        <div className="caption">
                        <h3><a href="/">Samsung Galaxy </a></h3>
                        <p>Price : <strong>$ 3,45,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                        <p><a href="/" className="btn btn-success" role="button">Add To Cart</a> <a href="/" className="btn btn-primary" role="button">See Details</a></p>
                        </div>
                    </div>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
                <div className="row">
                    <ul className="pagination alg-right-pad">
                    <li><a href="/">«</a></li>
                    <li><a href="/">1</a></li>
                    <li><a href="/">2</a></li>
                    <li><a href="/">3</a></li>
                    <li><a href="/">4</a></li>
                    <li><a href="/">5</a></li>
                    <li><a href="/">»</a></li>
                    </ul>
                </div>
               
                
                </div>


        );
    }
}

export default ProductListPhone;