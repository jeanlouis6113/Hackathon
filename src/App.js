import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom';
import PageDepartement from './components/Pages/PageDepartement';
import PageOeuvreArm from './components/Pages/PageOeuvreArm';
import PageOeuvreAsia from './components/Pages/PageOeuvreAsia';
import PageOeuvrePainting from './components/Pages/PageOeuvrePainting';
import PageOeuvreInstrument from './components/Pages/PageOeuvreInstrument';
import PageOeuvreIslam from './components/Pages/PageOeuvreIslam';
import PageOeuvreCloister from './components/Pages/PageOeuvreCloister';
import PageOeuvreEgypt from './components/Pages/PageOeuvreEgypt';
import PageOeuvreGrec from './components/Pages/PageOeuvreGrec';
import Footer from './components/Footer'


function App() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={PageDepartement}/>
          <Route exact path="/PageOeuvreArms" component={PageOeuvreArm} />
          <Route exact path="/PageOeuvreAsia" component={PageOeuvreAsia} />
          <Route exact path="/PageOeuvrePainting" component={PageOeuvrePainting} />
          <Route exact path="/PageOeuvreInstrument" component={PageOeuvreInstrument} />
          <Route exact path="/PageOeuvreGreek" component={PageOeuvreGrec} />
          <Route exact path="/PageOeuvreEgypt" component={PageOeuvreEgypt} />
          <Route exact path="/PageOeuvreIslamic" component={PageOeuvreIslam} />
          <Route exact path="/PageOeuvreCloister" component={PageOeuvreCloister} />
        </Switch>
        <Footer />
      </div>
      
    );
}

export default App;

