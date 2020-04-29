import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class NoMatch extends Component {
    render() {
        return(
            <div className="content-body">
                <Grid className="content-grid">
                    <Cell col={12}>
                        <p>Page not found!</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default NoMatch;