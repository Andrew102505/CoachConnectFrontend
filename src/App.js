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
import CoachListings from './components/views/CoachListings';
import CoachListingDetails from './components/views/CoachListingDetails';
import ShoppingCart from './components/views/ShoppingCart';
import Checkout from './components/views/Checkout';
import OrderConfirmation from './components/views/OrderConfirmation';
import CoachesOnly from './components/views/CoachesOnly';
import RegistrationSelection from './components/views/RegistrationSelection';
import CustomerAccountInfo from './components/views/CustomerAccountInfo';
import CoachAccountInfo from './components/views/CoachAccountInfo';
import AdminAccountInfo from './components/views/AdminAccountInfo';
import PrivateAccess from './components/views/PrivateAccess';
function App() {
  /**the issue is that the user is set to null everytime we render App.js and App.js is rerendered whenever we go to another page through the url bar
   * 
   */
  const[user, setUser] = useState(null);
  const[fetched, setFetched] = useState(false);
  const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const[cart, setCart] = useState(localStorageCart);
 
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
    
    setCart([...cart, session]);
    
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function Clear(){
    localStorage.removeItem('cart');
    setCart([]);
  }
  
  return (
    <Router>
    <div className="App">
      <Navbar user = {user} Clear = {Clear}/>
      <button onClick = {Clear}>Clear</button>
    <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/registrationselection">
            <RegistrationSelection/>
          </Route>
          <Route exact path = "/registercustomer">
            <CustomerRegistration initializeUser = {initializeUser} Clear = {Clear}/>
          </Route>
          <Route exact path = "/registercoach">
            <CoachRegistration initializeUser = {initializeUser} Clear = {Clear}/>
          </Route>
          <Route exact path = "/coaches"> 
            <Coaches/>
          </Route>
          <Route exact path = "/loginselection">
            <LoginSelection/>
          </Route>
          <Route exact path = "/customerlogin">
            <CustomerLogin initializeUser = {initializeUser} Clear = {Clear}/>
          </Route>
          <Route exact path = "/coachlogin">
            <CoachLogin initializeUser = {initializeUser} Clear = {Clear}/>
          </Route>
          <Route exact path = "/adminlogin">
            <AdminLogin initializeUser = {initializeUser} Clear = {Clear}/>
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
            <ListingDetails addSessionToCart = {addSessionToCart} user = {user} cart = {cart}/>
          </Route>
          <Route exact path = "/listingverification">
            <ListingVerification/>
          </Route>
          <Route exact path = "/sessionverification">
            <SessionVerification/>
          </Route>
          <Route exact path = "/coachlistings">
            <CoachListings user = {user}/>
          </Route>
          <Route exact path = "/coachlistingdetails">
            <CoachListingDetails/>
          </Route>
          <Route exact path = "/shoppingcart">
            <ShoppingCart cart = {cart}/>
          </Route>
          <Route exact path = "/checkout">
            <Checkout cart = {cart} user = {user} Clear = {Clear}/>
          </Route>
          <Route exact path = "/orderconfirmation">
            <OrderConfirmation/>
          </Route>
          <Route exact path = "/coachesonly">
            <CoachesOnly/>
          </Route>
          <Route exact path = "/customeraccountinfo">
            <CustomerAccountInfo user = {user}/>
          </Route>
          <Route exact path = "/coachaccountinfo">
            <CoachAccountInfo user = {user}/>
          </Route>
          <Route exact path = "/adminaccountinfo">
            <AdminAccountInfo user = {user}/>
          </Route>
          <Route exact path = '/privateaccess'>
            <PrivateAccess/>
          </Route>
        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;