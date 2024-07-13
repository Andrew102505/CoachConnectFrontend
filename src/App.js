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
import Listings from './components/views/Listings';
import ListingDetails from './components/views/ListingDetails';
import Navbar from './components/views/Navbar';
import CustomerService from './services/CustomerService';
import CoachService from './services/CoachService';
import AdminService from './services/AdminService';
import ShoppingCart from './components/views/ShoppingCart';

function App() {
  console.log(localStorage.getItem('cart')===null);
  const[user, setUser] = useState(null);
  const[fetched, setFetched] = useState(false);
  const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const[cart, setCart] = useState(localStorageCart);
  console.log("-------------------");
  console.log(cart);
  function initializeUser(){
    if(sessionStorage.getItem('role')==='CUSTOMER'){
      CustomerService.getCustomerById(sessionStorage.getItem('userId')).then(res =>{
        setUser(res.data);
      });
    }else if(sessionStorage.getItem('role')==='COACH'){
      CoachService.getCoachById(sessionStorage.getItem('userId')).then(res =>{
        setUser(res.data);
      });    
    }else if(sessionStorage.getItem('role')==='ADMIN'){
      AdminService.getAdminById(sessionStorage.getItem('userId')).then(res =>{
        setUser(res.data);
      });
    }
        setFetched(true);
    }
    
  
  if(fetched==false){
    initializeUser();
  }
  const addSessionToCart = session => {
    console.log(session.id);
    setCart([...cart, session]);
    
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return (
    <Router>
    <div className="App">
      <Navbar user = {user}/>
    <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/registercustomer">
            <CustomerRegistration initializeUser = {initializeUser}/>
          </Route>
          <Route exact path = "/registercoach">
            <CoachRegistration initializeUser = {initializeUser}/>
          </Route>
          <Route exact path = "/coaches"> 
            <Coaches/>
          </Route>
          <Route exact path = "/loginselection">
            <LoginSelection/>
          </Route>
          <Route exact path = "/customerlogin">
            <CustomerLogin initializeUser = {initializeUser}/>
          </Route>
          <Route exact path = "/coachlogin">
            <CoachLogin initializeUser = {initializeUser}/>
          </Route>
          <Route exact path = "/adminlogin">
            <AdminLogin initializeUser = {initializeUser}/>
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
          <Route exact path = "/listings">
            <Listings/>
          </Route>
          <Route exact path = "/listingdetails"> 
            <ListingDetails addSessionToCart = {addSessionToCart}/>
          </Route>
          <Route exact path = "/listingverification">
            <ListingVerification/>
          </Route>
          <Route exact path = "/sessionverification">
            <SessionVerification/>
          </Route>
          <Route exact path = "/shoppingcart">
            <ShoppingCart cart = {cart}/>
          </Route>
        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
