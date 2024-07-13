import { useState } from "react";
import SessionService from "../../services/SessionService";

const SessionList = (props) => {
    
    const listingId = props.listingId;
    const[fetched, setFetched] = useState(false);
    const sessions = props.sessions;
    
   

    return(
        <div className = "session-list">
            {sessions?.map((session) => (
            <div className="session-info" key = {session?.id}>
                <p>Date: {session?.date}</p>
                <p>Time: {session?.time}</p>
                <p>Status: {session?.numParticipants}/{session.capacity} enrolled</p>
                <button onClick = {() => props.addSessionToCart(session)} >Add to Cart</button>
            </div>
            ))}
        </div>
    )
}

export default SessionList;