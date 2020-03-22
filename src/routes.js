import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Menu from './components/menu';
import Combinatoria from './pages/combinatoria';
import contents from './contents';
import Frente from './components/frente';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        {/* matemática */}
        <Route exact path='/math' render={() => <Menu content={contents[0]}/>} />
        <Route path='/math/frente1' render={() => <Frente content={contents[0].frentes[0].assuntos} />} />
        <Route path='/math/frente2' render={() => <Frente content={contents[0].frentes[1].assuntos} />} />
        <Route path='/math/frente3' render={() => <Frente content={contents[0].frentes[2].assuntos} />} />
        <Route path='/math/frente4' render={() => <Frente content={contents[0].frentes[3].assuntos} />} />
        <Route path='/math/frente5' render={() => <Frente content={contents[0].frentes[4].assuntos} />} />
        <Route path='/material/combinatoria' component={Combinatoria} />
        {/* fisica */}
        <Route exact path='/fis' render={() => <Menu content={contents[1]} />}/>
        <Route path='/fis/frente1' render={() => <Frente content={contents[1].frentes[0].assuntos} />} />
        <Route path='/fis/frente2' render={() => <Frente content={contents[1].frentes[1].assuntos} />} />
        <Route path='/fis/frente3' render={() => <Frente content={contents[1].frentes[2].assuntos} />} />
        <Route path='/fis/frente4' render={() => <Frente content={contents[1].frentes[3].assuntos} />} />
        <Route path='/fis/frente5' render={() => <Frente content={contents[1].frentes[4].assuntos} />} />
        {/* quimica */}
        <Route exact path='/qui' render={() => <Menu content={contents[2]} />}/>
        <Route path='/qui/frente1' render={() => <Frente content={contents[2].frentes[0].assuntos} />} />
        <Route path='/qui/frente2' render={() => <Frente content={contents[2].frentes[1].assuntos} />} />
        <Route path='/qui/frente3' render={() => <Frente content={contents[2].frentes[2].assuntos} />} />
        <Route path='/qui/frente4' render={() => <Frente content={contents[2].frentes[3].assuntos} />} />
        {/* portugues */}
        <Route exact path='/port' render={() => <Menu content={contents[3]} />}/>
        <Route path='/port/lit' render={() => <Frente content={contents[3].frentes[0].assuntos} />} />
        <Route path='/port/book' render={() => <Frente content={contents[3].frentes[1].assuntos} />} />
        <Route path='/port/red' render={() => <Frente content={contents[3].frentes[2].assuntos} />} />
        {/* biologia */}
        <Route exact path='/bio' render={() => <Menu content={contents[4]} />}/>
        <Route path='/bio/frente1' render={() => <Frente content={contents[4].frentes[0].assuntos} />} />
        <Route path='/bio/frente2' render={() => <Frente content={contents[4].frentes[1].assuntos} />} />
        <Route path='/bio/frente3' render={() => <Frente content={contents[4].frentes[2].assuntos} />} />
        <Route path='/bio/frente4' render={() => <Frente content={contents[4].frentes[3].assuntos} />} />
        {/* historia */}
        <Route exact path='/his' render={() => <Menu content={contents[5]} />}/>
        <Route path='/his/frente1' render={() => <Frente content={contents[5].frentes[0].assuntos} />} />
        <Route path='/his/frente2' render={() => <Frente content={contents[5].frentes[1].assuntos} />} />
        {/* geografia */}
        <Route exact path='/geo' render={() => <Menu content={contents[6]} />}/>
        <Route path='/geo/fisica' render={() => <Frente content={contents[6].frentes[0].assuntos} />} />
        <Route path='/geo/politica' render={() => <Frente content={contents[6].frentes[1].assuntos} />} />
        {/* filosofia */}
        <Route exact path='/fil' render={() => <Menu content={contents[7]} />}/>
        <Route path='/fil/frente' render={() => <Frente content={contents[7].frentes[0].assuntos} />} />
    </Switch>
)

export default Routes;