import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import PageDepartement from './components/PageDepartement';
import PageOeuvreArm from './components/PageOeuvreArm';
import PageOeuvreAsia from './components/PageOeuvreAsia';
import PageOeuvrePainting from './components/PageOeuvrePainting';
import PageOeuvreInstrument from './components/PageOeuvreInstrument';


function App() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PageDepartement}/>
          <Route exact path="/PageOeuvreArms" component={PageOeuvreArm} />
          <Route exact path="/PageOeuvreAsia" component={PageOeuvreAsia} />
          <Route exact path="/PageOeuvrePainting" component={PageOeuvrePainting} />
          <Route exact path="/PageOeuvreInstrument" component={PageOeuvreInstrument} />
        </Switch>
      </div>
    );
}

export default App;

