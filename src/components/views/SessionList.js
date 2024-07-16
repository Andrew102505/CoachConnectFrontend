import { useState } from "react";
import SessionService from "../../services/SessionService";
import CustomerService from "../../services/CustomerService";

const SessionList = (props) => {
    
    const listingId = props.listingId;
    const[fetched, setFetched] = useState(false);
    const [notCustomer, setNotCustomer] = useState(false);
    const[addedSession, setAddedSession] = useState('');
    const sessions = props.sessions;
    
   function addToCart(customerId, sessionDate, session){
    if(sessionStorage.getItem('role') === 'CUSTOMER'){
    SessionService.containsParticipant(session?.id, customerId).then(res => {
        if(res.data === true){
            props.updateErrorDate(sessionDate);
        }else{
            props.addSessionToCart(session);
            updateAddedSession(session);
        }
    })
    }else{
        setNotCustomer(true);
    }
    
   }
   function updateAddedSession(session){
    setAddedSession(session);
   }

    return(
        <div className = "session-list">
            {notCustomer && <p>Customer account is required to purchase sessions.</p> }
            {addedSession !== '' && <p>Session - {addedSession} added to cart!</p>}
            {sessions?.map((session) => (
            <div className="session-info" key = {session?.id}>
                <p>Date: {session?.date}</p>
                <p>Time: {session?.time}</p>
                <p>Status: {session?.numParticipants}/{session.capacity} enrolled</p>
                {session?.numParticipants!==session?.capacity && <button onClick = {() => addToCart(props.user?.id, session?.date, session)}>Add to Cart</button>}
                {session?.numParticipants===session?.capacity && <p>Session Full</p>}
            </div>
            ))}
        </div>
    )
}

export default SessionList;