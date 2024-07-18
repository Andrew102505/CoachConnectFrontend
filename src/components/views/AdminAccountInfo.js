import {useHistory} from 'react-router-dom';
const AdminAccountInfo = (props) => { 

    const history = useHistory();
    if(sessionStorage.getItem('role') !== 'ADMIN'){
        history.push('/privateaccess');
    }

    return(
        <div className="admin-info">
            <h1>Account Info</h1>
            <p>Name: {props.user?.firstName} {props.user?.lastName}</p>
            <p>Email: {props.user?.email}</p>
            <p>Account Type: {props.user?.role.toLowerCase()}</p>
        </div>
    )
}

export default AdminAccountInfo;