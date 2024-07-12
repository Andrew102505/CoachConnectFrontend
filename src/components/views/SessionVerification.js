import {useLocation, useHistory} from 'react-router-dom';
const SessionVerification = () => {
    const location = useLocation();
    const history = useHistory();

    const createAnotherSession = () => {
        history.push({pathname: '/createsession', state: {listing: location.state?.listing}});
    }

    return (
        <div>
            <h2>Session Created!</h2>
            <button onClick = {createAnotherSession}>Add another session to this listing</button>
        </div>
    )
}

export default SessionVerification;
//before you run your code
//add the routes for all components in your App.js file
//make sure you've added all the correct imports and used export default on every component
//remember to import services.