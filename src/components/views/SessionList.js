import { useState } from "react";
import SessionService from "../../services/SessionService";
import CustomerService from "../../services/CustomerService";

const SessionList = (props) => {
    
    const listingId = props.listingId;
    const[fetched, setFetched] = useState(false);
    const [notCustomer, setNotCustomer] = useState(false);
    const[addedSession, setAddedSession] = useState('');
    const[isDuplicate, setIsDuplicate] = useState('');
    const sessions = props.sessions;
    
   function addToCart(customerId, session){
    if(sessionStorage.getItem('role') === 'CUSTOMER'){
    SessionService.containsParticipant(session?.id, customerId).then(res => {
        if(res.data === true){//true that the participant is already enrolled in the session
            setAddedSession('');
            setIsDuplicate('');
            let message =  `${session?.name} || ${session?.date}`;
            props.updateErrorMessage(message);
        }else{
            let duplicate = props.cart.filter(x=>x.id === session.id);
           
            if(duplicate.length>0){
                props.updateErrorMessage('');
                setAddedSession('');
                setIsDuplicate(session?.date);
                
            }else{
                props.addSessionToCart(session);
                props.updateErrorMessage('');
                setIsDuplicate('');
                setAddedSession(session?.date);
            }
           
        }
    })
    }else{
        setNotCustomer(true);
    }
    
   }
   

    return(
        <div className = "session-list">
            {notCustomer && <p>Customer account is required to purchase sessions.</p> }
            {addedSession !== '' && <p>Session - {addedSession} added to cart!</p>}
            {isDuplicate !== '' && <p>Session - {addedSession} is already in cart.</p>}
            {sessions?.map((session) => (
            <div className="session-info" key = {session?.id}>
                <p>{session?.name} || {session?.date}</p>
                <p>Time: {session?.time}</p>
                <p>Status: {session?.numParticipants}/{session.capacity} enrolled</p>
                {session?.numParticipants!==session?.capacity && <button onClick = {() => addToCart(props.user?.id, session)}>Add to Cart</button>}
                {session?.numParticipants===session?.capacity && <p>Session Full</p>}
            </div>
            ))}
        </div>
    )
}

export default SessionList;