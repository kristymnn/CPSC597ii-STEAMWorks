import React, { Component } from 'react';
import Login from "./login/Login";

class Quizes extends Component {
    render() {
        return(
            <div className="content-body">
                <div className="container">
                    <div className="title">Quiz</div>
                    <br/>
                    <Login/>
                </div>
            </div>
        )
    }
}

export default Quizes;