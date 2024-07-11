import logo from './logo.svg';
import './App.css';
import Home  from './components/views/Home';
import CustomerRegistration from './components/registration/CustomerRegistration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {userEffect, useState} from 'react';
import CoachRegistration from './components/registration/CoachRegistration';
import CoachDetails from './components/views/CoachDetails';
import Coaches from './components/views/Coaches';
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
          <Route exact path = "/coaches"> 
            <Coaches/>
          </Route>
          <Route exact path = "/coachdetails/:id">
            <CoachDetails/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
