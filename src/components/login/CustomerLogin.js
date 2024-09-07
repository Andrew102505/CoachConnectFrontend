import { useState } from "react";
import LoginService from "../../services/LoginService";
import { useHistory } from "react-router-dom";
import CustomerLoginCSS from './CustomerLogin.module.css';
const CustomerLogin = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isPending, setIsPending] = useState(false);
    const[invalid, setInvalid] = useState(false);
    const history = useHistory();

    function authenticateUser(e){
        e.preventDefault();
        const token = {email, password};//could cause issues since using const 
        setIsPending(true);
        LoginService.authenticateUser('customer', token)//this is why we made seperate login components for each user type so we could specify the role directly as a parameter
        .then(res => {
            setIsPending(false);
            //need to remember that the id as well as all other values in storage are stored as type string
            
            sessionStorage.setItem('userId', `${res.data.id}`);
            sessionStorage.setItem('role', `${res.data.role}`);
            props.initializeUser();
            props.Clear();
            history.push('/');
            }).catch(err=>{
                setInvalid(true);
              });
                
            }
            
       
    

    return (
        <div className={CustomerLoginCSS.customerloginelement}>
        <div className={CustomerLoginCSS.customerlogin}>
            <h2>Login</h2>
            <form onSubmit = {authenticateUser}>
                <div className = {CustomerLoginCSS.inputbox}>
                <label htmlFor="email" required></label>
                <input id = "email" type = "text" placeholder="Email" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                <i className='bx bxs-user'></i>
                </div>
                <br></br>
                <div className = {CustomerLoginCSS.inputbox}>
                <label htmlFor="password" required></label>
                <input id = "password" type = "text" placeholder="Password" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                <i className='bx bxs-lock-alt' ></i>
                </div>
                {invalid && <p>Invalid username and password</p>}
                {!isPending && <button >Sign in</button>}
                {isPending && <button>Signing in</button>}
            </form>
        </div>
        </div>
    )
}

export default CustomerLogin;