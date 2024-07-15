import {Link, useHistory} from 'react-router-dom';

const LoginSelection = () => {
    const history = useHistory();
    function customerLogin(){
        history.push('/customerlogin');
    }
    function coachLogin(){
        history.push('/coachlogin');
    }
    function registrationSelection(){
        history.push('/registrationselection');
    }
    return(
        <div className = "login-selection">
            <button onClick = {customerLogin}>Customer</button>
            <button onClick={coachLogin}>Coach</button>
            <Link to = '/adminlogin'>Admin Login</Link>{/**we made this a link instead of a button since we want it out of the way */}
            <button onClick={registrationSelection}>Create Account</button>
        </div>

    )
}

export default LoginSelection;