import SessionService from "../../services/SessionService";
import ParticipantSessionsList from "./ParticipantSessionsList";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import CustomerAccountInfoCSS from './CustomerAccountInfo.module.css';
const CustomerAccountInfo = (props) => {
    const history = useHistory();
    const[participantSessions, setParticipantSessions] = useState(null);
    const[fetched, setFetched] = useState(false);
    if(sessionStorage.getItem('role') !== 'CUSTOMER'){
        history.push('/privateaccess');
    }
    const getParticipantSessions = () => {
        SessionService.getParticipantSessions(props.user?.id).then(res=>{
            let sessions = res.data;
            setParticipantSessions(sessions);
            setFetched(true);
        }).catch(err=>{
            console.log(err);
          });
    }

    if(fetched===false){
        getParticipantSessions();
    }
    return (
       <div className={CustomerAccountInfoCSS.customerinfo}>
        <h1>Account Info</h1>
        <table className={CustomerAccountInfoCSS.information}>
            <tr>
                <td className={CustomerAccountInfoCSS.category}>Name</td>
                <td className={CustomerAccountInfoCSS.data}>{props.user?.firstName} {props.user?.lastName}</td>
            </tr>
            <tr>
                <td className={CustomerAccountInfoCSS.category}>Email</td>
                <td className={CustomerAccountInfoCSS.data}>{props.user?.email}</td>
            </tr>
            <tr>
                <td className={CustomerAccountInfoCSS.category}>Account Type</td>
                <td className={CustomerAccountInfoCSS.data}>{props.user?.role.toLowerCase()}</td>
            </tr>
        </table>
        
        <br/>
        <h2>Purchase History</h2>

        <div className={CustomerAccountInfoCSS.purchasehistorylist}>
        
        
             {participantSessions?.map((session)=>(
            <div className = {CustomerAccountInfoCSS.sessionpreview} key = {session?.id}>
                <h2 className={CustomerAccountInfoCSS.title}>{session?.name}</h2>
                    <div className={CustomerAccountInfoCSS.info}>
                        <p><span>Date:</span> {session?.date}</p>
                        <p><span>Time: </span>  {session?.time}</p>
            </div>
            </div>
        ))}
        
        </div>
        </div>
    )
}

export default CustomerAccountInfo;