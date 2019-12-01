import React, { Component } from 'react';

class ProductListItem extends Component {
    render() {
        return (
            <div className="col-md-9">
                <div>
                    <ol className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">Table</li>
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
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                    <div className="thumbnail product-box">
                        <img src="assets/img/tablet2.jpg" alt="" />
                        <div className="caption">
                        <h3><a href="/"> Ipad 2' </a></h3>
                        <p>Price : <strong>$ 545,900</strong></p>
                        <p><a href="/">Ptional dismiss button </a></p>
                        <p>Ptional dismiss button in tional dismiss button in </p>
                       
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

export default ProductListItem;