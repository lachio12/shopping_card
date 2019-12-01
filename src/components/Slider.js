import React, { Component } from 'react';
import Sliderimg from './Sliderimg';
import Sliderproduct from './Sliderproduct';

class Slider extends Component {
    render() {
        return (
            <div className="row">
                <Sliderimg/>
                <Sliderproduct/>
            
            </div>   
          
        );
    }
}

export default Slider;