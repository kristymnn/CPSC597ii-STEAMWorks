import React, { Component } from 'react';

class Videos extends Component {
    render() {
        return(
            <div className="content-body">
                <div className="container">
                    <div className="title">Videos</div>
                    <br/>
                    <h5>Science</h5>
                        <p>Inflate a Balloon</p>
                        <iframe title="science" width="420" height="235" src="https://www.youtube.com/embed/5mCcFzcCIvE"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <br/>
                    <h5>Technology</h5>
                        <p>Machine Pulley System</p>
                        <iframe title="technology" width="420" height="235" src="https://www.youtube.com/embed/Ymo_vrCCFu8"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <br/>
                    <h5>Engineer</h5>
                        <p>Demonstrating Engineering Principles</p>
                        <iframe title="engineering" width="420" height="235" src="https://www.youtube.com/embed/y6FmrOS72EA"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <br/>
                    <h5>Art</h5>
                        <p>Paper Spinners</p>
                        <iframe title="art" width="420" height="235" src="https://www.youtube.com/embed/MkfNBu55OfM"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <br/>
                    <h5>Mathematics</h5>
                        <p>Geometrical Shapes</p>
                        <iframe title="mathematics" width="420" height="235" src="https://www.youtube.com/embed/AQx7bpUUTU4"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        <br/>
                </div>
            </div>
        )
    }
}

export default Videos;