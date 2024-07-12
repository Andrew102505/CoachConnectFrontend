import logo from './logo.svg';
import './App.css';
import Home  from './components/views/Home';
import CustomerRegistration from './components/registration/CustomerRegistration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import CoachRegistration from './components/registration/CoachRegistration';
import CoachDetails from './components/views/CoachDetails';
import Coaches from './components/views/Coaches';
import CoachList from './components/views/CoachList';
import CreateListing from './components/views/CreateListing';
import CreateSession from './components/views/CreateSession';
import ListingVerification from './components/views/ListingVerification';
import SessionVerification from './components/views/SessionVerification';
import LoginSelection from './components/views/LoginSelection';
import CustomerLogin from './components/login/CustomerLogin';
import CoachLogin from './components/login/CoachLogin';
import AdminLogin from './components/login/AdminLogin';
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
          <Route exact path = "/loginselection">
            <LoginSelection/>
          </Route>
          <Route exact path = "/customerlogin">
            <CustomerLogin/>
          </Route>
          <Route exact path = "/coachlogin">
            <CoachLogin/>
          </Route>
          <Route exact path = "/adminlogin">
            <AdminLogin/>
          </Route>
          <Route exact path = "/coachdetails/:id">
            <CoachDetails/>
          </Route>
          <Route exact path = "/createsession">
            <CreateSession/>
          </Route>
          <Route exact path = "/createlisting">
            <CreateListing/>
          </Route>
          <Route exact path = "/listingverification">
            <ListingVerification/>
          </Route>
          <Route exact path = "/sessionverification">
            <SessionVerification/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
