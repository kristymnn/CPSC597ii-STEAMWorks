import React, { Component } from 'react';
import Carousel from './steam/carousel';

class Steam extends Component {

    render() {
        return(
            <div className="content-body">
                <div className="container">
                    <div className="title">STEAM</div>
                    <br/>
                    <Carousel/>
                </div>
            </div>
        )
    }
}

export default Steam;