import React, { Component } from 'react';

class Lessons extends Component {
    render() {
        return(
            <div className="content-body">
                <div className="container">
                    <div className="title">Lessons</div>
                    <br/>
                    <h4>Science</h4>
                        <h6>Lung Model Lesson Plan</h6>
                            <a href="/STEAMLungModel.pdf" download>Lesson 1</a>
                        <h6>Melting Ice Lesson Plan</h6>
                            <a href="/STEAMMeltingIce.pdf" download>Lesson 2</a>
                        <h6>Water Walking Experiment Lesson Plan</h6>
                            <a href="/STEAMWaterWalking.pdf" download>Lesson 3</a>
                        <br/>
                    <h4>Technology</h4>
                        <h6>Levitating Ball Lesson Plan</h6>
                            <a href="/STEAMLevitatingBall.pdf" download>Lesson 4</a>
                        <h6>Circuit Flow Lesson Plan</h6>
                            <a href="/STEAMCircuitFlow.pdf" download>Lesson 5</a>
                        <br/>
                    <h4>Engineer</h4>
                        <h6>Hoop Glider Lesson Plan</h6>
                            <a href="/STEAMHoopGlider.pdf" download>Lesson 6</a>
                        <br/>
                    <h4>Art</h4>
                        <h6>Velocity Art Lesson Plan</h6>
                            <a href="/STEAMVelocityArt.pdf" download>Lesson 7</a>
                        <br/>
                    <h4>Mathematics</h4>
                </div>
            </div>
        )
    }
}

export default Lessons;