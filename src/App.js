import logo from './logo.svg';
import './App.css';
import Home  from './components/Home';
import CustomerRegistration from './components/CustomerRegistration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {userEffect, useState} from 'react';
import CoachRegistration from './components/CoachRegistration';
function App() {
  return (
    <Router>
    <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/registercustomer">
            <CustomerRegistration/>
          </Route>
          <Route exact path = "/registercoach">
            <CoachRegistration/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
