import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
const Navbar = (props) => {

    const history = useHistory();
    /*
    const[role, setRole] = useState(sessionStorage.getItem('role'));
    const[fetched, setFetched] = useState(false);
    const[user, setUser] = useState(null);
    //how do we want to retrieve the users name every tiem
    function getUser(){
        const userId = sessionStorage.getItem('userId');
        const role = sessionStorage.getItem('role');
        if(role === 'CUSTOMER'){
            CustomerService.getCustomerById(userId).then(res => {
                setUser(res.data);
                setFetched(true);
            })
        }else if(role === 'COACH'){
            CoachService.getCoachById(userId).then(res => {
                setUser(res.data);
                setFetched(true);
            })
        }else if(role === 'ADMIN'){
            //implement this later
        }
    }
    
    if(fetched == false){
        getUser();
    }
    */
  
   function logout(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('role');
    props.Clear();
    history.push('/');
    window.location.reload();
   }
    return(
        <nav className="navbar">
            <h1>CoachConnect</h1>
            <p>{props.user?.firstName} {props.user?.lastName}</p>
            <div className="links">
                <Link to =  "/">Home</Link>
                <Link to = "/listings">Listings</Link>
                <Link to = "/coaches">Coaches</Link>
                {props?.user?.role === 'COACH'/*sessionStorage.getItem('role')==='COACH'*/ && <Link to = "/createlisting">Create Listing</Link>}
                <Link to = "/loginselection">Login</Link>
                {sessionStorage.getItem('role') === 'CUSTOMER' && <Link to = "/shoppingcart">Cart</Link>}
                {sessionStorage.getItem('role') === 'COACH' && <Link to = "/coachlistings">My Listings</Link>}
                {sessionStorage.getItem('role') === 'CUSTOMER' && <Link to = "/customeraccountinfo">Account Info</Link>}
                {sessionStorage.getItem('role') === 'COACH' && <Link to = "/coachaccountinfo">Account Info</Link>}
                {sessionStorage.getItem('role') === 'ADMIN' && <Link to = "/adminaccountinfo">Account Info</Link>}
                <button onClick = {logout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;

