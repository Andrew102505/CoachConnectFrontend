import {Link, useHistory} from 'react-router-dom';
import LoginSelectionCSS from './LoginSelection.module.css';
const LoginSelection = () => {
    const history = useHistory();
    function customerLogin(){
        history.push('/customerlogin');
    }
    function coachLogin(){
        history.push('/coachlogin');
    }
    function adminLogin(){
        history.push('/adminlogin');
    }
    function registrationSelection(){
        history.push('/registrationselection');
    }
    
    return(
        <div className = {LoginSelectionCSS.loginselection}>
            <button onClick = {customerLogin}>Customer</button>
            <button onClick={coachLogin}>Coach</button>
            <button onClick={adminLogin}>Admin</button>
            <button onClick={registrationSelection}>Create Account</button>
        </div>

    )
}

export default LoginSelection;