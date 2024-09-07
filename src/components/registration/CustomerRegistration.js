import { useState } from "react";
import {useHistory} from 'react-router-dom';
import CustomerService from "../../services/CustomerService";//../moves us out of the current directory this file is in
import CustomerRegistrationCSS from './CustomerRegistration.module.css';
const CustomerRegistration = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const saveCustomer = (e) => {
        e.preventDefault();
        let customer = {firstName, lastName, email, password};
        setIsPending(true);
        console.log('customer => ' + JSON.stringify(customer));
        CustomerService.createCustomer(customer).then(res=>{//the .then makes is so that the asynchronous operation before must be completed before we go inside the then statement(so once the customer has been saved to db we will be redirected to the home page)
            setIsPending(false);
            sessionStorage.setItem('userId', `${res.data.id}`);
            sessionStorage.setItem('role', `${res.data.role}`);
            props.initializeUser();
            props.Clear();
            history.push('/');
        });
        //lets have the POST method return the saved customer so we can get a hold of the id and the role while leaving the role preset
        //something like const{id, firstName, lastName, email, password, role} = method call
        //const user = {id, firstName, lastName, email, password, role} --> then we can pass this user around

    }

    return(
        <div className = {CustomerRegistrationCSS.customerregistration}>
            <h2>Create Account</h2>
            <form onSubmit={saveCustomer}>{/**calls the function when a form is submitted */}
            <div className = {CustomerRegistrationCSS.inputbox}>
                <label htmlFor="firstname"></label>
                {/**e is the event object, target is the input element, value is whatever we are trying to type into it  */}
                {/**when the input field is changed, the onChange function will be fired and will use the set function to update the state variable with the text entered in the input field and the value of the input field is dynamically updated */}
                <input id = "firstname" type="text" placeholder="First name" required value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CustomerRegistrationCSS.inputbox}>
                <label htmlFor="lastname" required></label>
                <input id = "lastname" type = "text" placeholder="Last name" required value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CustomerRegistrationCSS.inputbox}>
                <label htmlFor="email" required></label>
                <input id = "email" type = "text" placeholder="Email" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CustomerRegistrationCSS.inputbox}>
                <label htmlFor="password" required></label>
                <input id = "password" type = "text" placeholder="Password" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br></br>
                {/**the button attribute will ilicit a submit event */}
                {!isPending && <button >Create</button>}
                {isPending && <button>Creating Account</button>}
                
            </form>
        </div>
    )
}

export default CustomerRegistration;
