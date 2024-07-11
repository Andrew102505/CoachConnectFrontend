import {Link, useHistory} from 'react-router-dom';

const LoginSelection = () => {
    const history = useHistory();
    function customerLogin(){
        history.push('/customerlogin');
    }
    function coachLogin(){
        history.push('/coachlogin');
    }
    return(
        <div className = "login-selection">
            <button onClick = {customerLogin}>Customer</button>
            <button onClick={coachLogin}>Coach</button>
            <Link to = '/adminlogin'>Admin Login</Link>{/**we made this a link instead of a button since we want it out of the way */}
        </div>

    )
}

export default LoginSelection;