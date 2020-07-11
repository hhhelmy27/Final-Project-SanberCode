import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {WeightConverter, HeightConverter, BodyMassIndex} from './views'

function App() {
  return (
    //Routing dengan menggunakan React Router dengan tiga buah halaman
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>How Healthy Are You?</h1>
          <ul>
            <li><Link to="/weight">Weight Converter</Link></li>
            <li><Link to="/height">Height Converter</Link></li>
            <li><Link to="/bmi">Body Mass Index</Link></li>
          </ul>
        </header>

        <Switch>
          <Route path="/weight">
            <WeightConverter/>
          </Route>
          <Route path="/height">
            <HeightConverter/>
          </Route>
          <Route path="/bmi">
            <BodyMassIndex/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;