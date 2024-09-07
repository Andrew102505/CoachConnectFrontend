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
       <div className="customer-info">
        <h1>Account Info</h1>
        <p>Name: {props.user?.firstName} {props.user?.lastName}</p>
        <p>Email: {props.user?.email}</p>
        <p>Account Type: {props.user?.role.toLowerCase()}</p>
        <br/>
        <h3>Purchase History</h3>
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