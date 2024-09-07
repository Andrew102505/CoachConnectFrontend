import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';
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
        <nav className={NavbarCSS.navbar}>
            <div className={NavbarCSS.navdiv}>
            <div className={NavbarCSS.logo}><img src="/images/logo.png" alt="" /></div>{/*put image in here*/}
            
                <ul>
                
                <li><div><Link to =  "/" className={NavbarCSS.link}>Home</Link></div></li>
                <li><div><Link to = "/listings" className={NavbarCSS.link}>Listings</Link></div></li>
                <li><div><Link to = "/coaches" className={NavbarCSS.link}>Coaches</Link></div></li>
                {props?.user?.role === 'COACH'/*sessionStorage.getItem('role')==='COACH'*/ && <li><div><Link to = "/createlisting" className={NavbarCSS.link}>Create Listing</Link></div></li>}
                {sessionStorage.getItem('role') === 'CUSTOMER' && <li><div><Link to = "/shoppingcart" className={NavbarCSS.link}>Cart</Link></div></li>}
                {sessionStorage.getItem('role') === 'COACH' && <li><div><Link to = "/coachlistings" className={NavbarCSS.link}>My Listings</Link></div></li>}
                {sessionStorage.getItem('role') === 'CUSTOMER' && <li><div><Link to = "/customeraccountinfo" className={NavbarCSS.link}>Account Info</Link></div></li>}
                {sessionStorage.getItem('role') === 'COACH' && <li><div><Link to = "/coachaccountinfo" className={NavbarCSS.link}>Account Info</Link></div></li>}
                {sessionStorage.getItem('role') === 'ADMIN' && <li><div><Link to = "/adminaccountinfo" className={NavbarCSS.link}>Account Info</Link></div></li>}
                
                <Link to = "/loginselection"><button>Login</button></Link>
                <button onClick = {logout}>Logout</button>
                <li><div className = {NavbarCSS.currentuser}>{props.user?.firstName} {props.user?.lastName}</div></li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;