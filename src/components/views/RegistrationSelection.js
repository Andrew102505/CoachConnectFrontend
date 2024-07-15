import { useHistory } from "react-router-dom";

const RegistrationSelection = () => {
    const history = useHistory();

    function registerCustomer(){
        history.push('registercustomer');
    }
    function registerCoach(){
        history.push('registercoach');
    }
    return (
        //have to big button here both on a popup like clever
        //div is the pop up background
        <div className = "registration-selection-popup">
            <button onClick={registerCustomer}>Create Customer Account</button>
            <button onClick={registerCoach}>Create Coach Account</button>
        </div>
        
    )
}

export default RegistrationSelection;