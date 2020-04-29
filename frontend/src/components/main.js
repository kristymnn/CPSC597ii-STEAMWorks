import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Lessons from './lessons';
import Steam from './steam';
import Videos from './videos';
import Quizes from './quizes';
import NoMatch from './nomatch';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/steam" component={Steam} />
        <Route path="/videos" component={Videos} />
        <Route path="/quizes" component={Quizes} />
        <Route component={NoMatch} />
    </Switch>
)

export default Main;