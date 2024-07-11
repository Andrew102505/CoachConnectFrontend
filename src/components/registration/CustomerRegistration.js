import { useState } from "react";
import {useHistory} from 'react-router-dom';
import CustomerService from "../../services/CustomerService";//../moves us out of the current directory this file is in

const CustomerRegistration = () => {
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
            history.push('/');
        });
        //lets have the POST method return the saved customer so we can get a hold of the id and the role while leaving the role preset
        //something like const{id, firstName, lastName, email, password, role} = method call
        //const user = {id, firstName, lastName, email, password, role} --> then we can pass this user around

    }

    return(
        <div className = 'customer-registration'>
            <h2>Create Account</h2>
            <form onSubmit={saveCustomer}>{/**calls the function when a form is submitted */}
                <label htmlFor="firstname">First Name: </label>
                {/**e is the event object, target is the input element, value is whatever we are trying to type into it  */}
                {/**when the input field is changed, the onChange function will be fired and will use the set function to update the state variable with the text entered in the input field and the value of the input field is dynamically updated */}
                <input id = "firstname" type="text" required value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br></br>
                <label htmlFor="lastname" required>Last Name: </label>
                <input id = "lastname" type = "text" required value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                <br></br>
                <label htmlFor="email" required>Email: </label>
                <input id = "email" type = "text" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="password" required>Password: </label>
                <input id = "password" type = "text" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                {/**the button attribute will ilicit a submit event */}
                {!isPending && <button >Create</button>}
                {isPending && <button>Creating Account</button>}
                
            </form>
        </div>
    )
}

export default CustomerRegistration;
