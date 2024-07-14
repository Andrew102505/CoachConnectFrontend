import CoachService from "../../services/CoachService";
import CustomerService from "../../services/CustomerService";
import {Link} from 'react-router-dom';
import { useState } from "react";
const Navbar = (props) => {
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
                <Link to = "/shoppingcart">Cart</Link>
                {sessionStorage.getItem('role')==='COACH' && <Link to = "/coachlistings">My Listings</Link>}
            </div>
        </nav>
    )
}

export default Navbar;

