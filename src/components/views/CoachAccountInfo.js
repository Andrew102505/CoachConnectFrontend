import { useHistory } from 'react-router-dom';

const CoachAccountInfo = (props) => {
    const history = useHistory();
    if(sessionStorage.getItem('role') !== 'COACH'){
        history.push('/privateaccess');
    }

    return(
        <div className="coach-info">
            <h1>Account Info</h1>
            <p>Name: {props.user?.firstName} {props.user?.lastName}</p>
            <p>Email: {props.user?.email}</p>
            <p>Account Type: {props.user?.role.toLowerCase()}</p>
        </div>
    )
}

export default CoachAccountInfo;