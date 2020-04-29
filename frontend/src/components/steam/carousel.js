import React, { Component } from 'react';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const hoopglider = [
    {
        name: 'Hoop Glider 1',
        url: './hg01.jpg',
        description: 'Materials to make a hoop glider'
    },
    {
        name: 'Hoop Glider 2',
        url: './hg02.jpg',
        description: 'Cut thick construction paper into three pieces about 1.5 x 7 inches each'
    },
    {
        name: 'Hoop Glider 3',
        url: './hg03.jpg',
        description: 'Take two pieces and tape them together to make a hoop'
    },
    {
        name: 'Hoop Glider 4',
        url: './hg04.jpg',
        description: 'Take the third piece and tape together to make a hoop'
    },
    {
        name: 'Hoop Glider 5',
        url: './hg05.jpg',
        description: 'Tape a straw to the inside of each hoop'
    },
    {
        name: 'Hoop Glider 6',
        url: './hg06.jpg',
        description: 'Direction of the hoop glider'
    },
    {
        name: 'Hoop Glider 7',
        url: './hg07.jpg',
        description: 'Finished hoop glider'
    }
]

const walkingwater = [
    {
        name: 'Walking Water 1',
        url: './ww01.jpg',
        description: 'Materials for a walking water experiment. Use transparent cups'
    },
    {
        name: 'Walking Water 2',
        url: './ww02.jpg',
        description: 'Fold a paper towel together to make a thick strip. Make four.'
    },
    {
        name: 'Walking Water 3',
        url: './ww03.jpg',
        description: 'Set cups in a line and fill the 1st, 3rd, 5th cups with water.'
    },
    {
        name: 'Walking Water 4',
        url: './ww04.jpg',
        description: 'Add 2-3 drops of food color to the water cups. 1 color per cup.'
    },
    {
        name: 'Walking Water 5',
        url: './ww05.jpg',
        description: 'Place the four paper towel strips into the cup'
    },
    {
        name: 'Walking Water 6',
        url: './ww06.jpg',
        description: 'Watch as the water is transferred to the cups with no water.'
    }
]

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slideToShow: 1,
            slidesToScroll: 1,
            className: "slides"
        }
        return(
            <div>
            <div className="whole">
            <h5>Hoop Glider Activity</h5>
                <Slider {...settings}>
                    {hoopglider.map((hoopglider) => {
                        return(
                            <div className="slider">
                                <img className="imageSize" src={hoopglider.url} alt="steampics"/>
                                <div className="description"><p>{hoopglider.description}</p></div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <br/>
            <div className="whole">
                <h5>Walking Water Activity</h5>
                <Slider {...settings}>
                    {walkingwater.map((walkingwater) => {
                        return(
                            <div className="slider">
                                <img className="imageSize" src={walkingwater.url} alt="steampics"/>
                                <div className="description"><p>{walkingwater.description}</p></div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
        )
    }
}

export default Carousel;