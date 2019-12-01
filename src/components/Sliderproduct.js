import React, { Component } from 'react';

class Sliderproduct extends Component {
    render() {
        return (
            <div className="col-md-3 text-center">
                <div className=" col-md-12 col-sm-6 col-xs-6">
                <div className="offer-text">
                    30% off here
                </div>
                <div className="thumbnail product-box">
                    <img src="assets/img/dummyimg.png" alt="" />
                    <div className="caption">
                    <h3><a href="/">Samsung Galaxy </a></h3>
                    <p><a href="/">Ptional dismiss button </a></p>
                    </div>
                </div>
                </div>
                <div className=" col-md-12 col-sm-6 col-xs-6">
                <div className="offer-text2">
                    30% off here
                </div>
                <div className="thumbnail product-box">
                    <img src="assets/img/dummyimg.png" alt="" />
                    <div className="caption">
                    <h3><a href="/">Samsung Galaxy </a></h3>
                    <p><a href="/">Ptional dismiss button </a></p>
                    </div>
                </div>
                </div>
          </div>
        );
    }
}

export default Sliderproduct;