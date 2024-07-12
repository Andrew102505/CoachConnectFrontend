import { useState } from "react";
import LoginService from "../../services/LoginService";
import { useHistory } from "react-router-dom";
const CoachLogin = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    function authenticateUser(e){
        e.preventDefault();
        const token = {email, password};//could cause issues since using const 
        setIsPending(true);
        LoginService.authenticateUser('coach', token)//this is why we made seperate login components for each user type so we could specify the role directly as a parameter
        .then(res => {
            setIsPending(false);
            sessionStorage.setItem('userId', `${res.data.id}`);
            sessionStorage.setItem('role', `${res.data.role}`);
            history.push('/');
        });
    }

    return (
        <div className="coach-login">
            <h2>Login</h2>
            <form onSubmit = {authenticateUser}>
            <label htmlFor="email" required>Email: </label>
                <input id = "email" type = "text" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="password" required>Password: </label>
                <input id = "password" type = "text" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
                {!isPending && <button >Create</button>}
                {isPending && <button>Creating Account</button>}
            </form>
        </div>
    )
}

export default CoachLogin;