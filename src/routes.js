import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/main'
import MathMenu from './pages/math'
import MathFrente5 from './pages/math_frente5';
import Combinatoria from './pages/combinatoria';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/math' component={MathMenu} />
        <Route exact path='/math/frente1' component={Main} />
        <Route exact path='/math/frente2' component={Main} />
        <Route exact path='/math/frente3' component={Main} />
        <Route exact path='/math/frente4' component={Main} />
        <Route exact path='/math/frente5' component={MathFrente5} />
        <Route exact path='/material/combinatoria' component={Combinatoria} />
    </Switch>
)

export default Routes;