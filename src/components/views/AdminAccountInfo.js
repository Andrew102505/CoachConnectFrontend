import {useHistory} from 'react-router-dom';
import AdminAccountInfoCSS from './AdminAccountInfo.module.css';
const AdminAccountInfo = (props) => { 

    const history = useHistory();
    if(sessionStorage.getItem('role') !== 'ADMIN'){
        history.push('/privateaccess');
    }

    return(
        <div className={AdminAccountInfoCSS.admininfo}>
        <h1>Account Info</h1>
        <table className={AdminAccountInfoCSS.information}>
        <tr>
            <td className={AdminAccountInfoCSS.category}>Name</td>
            <td className={AdminAccountInfoCSS.data}>{props.user?.firstName} {props.user?.lastName}</td>
        </tr>
        <tr>
            <td className={AdminAccountInfoCSS.category}>Email</td>
            <td className={AdminAccountInfoCSS.data}>{props.user?.email}</td>
        </tr>
        <tr>
            <td className={AdminAccountInfoCSS.category}>Account Type</td>
            <td className={AdminAccountInfoCSS.data}>{props.user?.role.toLowerCase()}</td>
        </tr>
    </table>
    </div>
    )
}

export default AdminAccountInfo;