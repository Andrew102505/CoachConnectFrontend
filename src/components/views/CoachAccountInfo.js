import { useHistory } from 'react-router-dom';
import CoachAccountInfoCSS from './CoachAccountInfo.module.css';
const CoachAccountInfo = (props) => {
    const history = useHistory();
    if(sessionStorage.getItem('role') !== 'COACH'){
        history.push('/privateaccess');
    }

    return(
        <div className={CoachAccountInfoCSS.coachinfo}>
            <h1>Account Info</h1>
            <table className={CoachAccountInfoCSS.information}>
            <tr>
                <td className={CoachAccountInfoCSS.category}>Name</td>
                <td className={CoachAccountInfoCSS.data}>{props.user?.firstName} {props.user?.lastName}</td>
            </tr>
            <tr>
                <td className={CoachAccountInfoCSS.category}>Email</td>
                <td className={CoachAccountInfoCSS.data}>{props.user?.email}</td>
            </tr>
            <tr>
                <td className={CoachAccountInfoCSS.category}>Account Type</td>
                <td className={CoachAccountInfoCSS.data}>{props.user?.role.toLowerCase()}</td>
            </tr>
        </table>
        </div>
    )
}

export default CoachAccountInfo;