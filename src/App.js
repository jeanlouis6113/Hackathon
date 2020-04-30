import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import PageDepartement from './components/Pages/PageDepartement';
import PageOeuvreArm from './components/Pages/PageOeuvreArm';
import PageOeuvreAsia from './components/Pages/PageOeuvreAsia';
import PageOeuvrePainting from './components/Pages/PageOeuvrePainting';
import PageOeuvreInstrument from './components/Pages/PageOeuvreInstrument';
import Footer from './components/Footer'


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
        <Footer />
      </div>
      
    );
}

export default App;

