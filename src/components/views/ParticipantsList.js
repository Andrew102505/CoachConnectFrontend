//this will set up a 

import { useState } from "react"

//upon signing up we are going to need to make use of the sessionRepository to retrieve all participants for that session
const ParticipantsList = (props) => {

    const[fetched, setFetched] = useState(false);
    const[participants, setParticipants] = useState(null);
    
    //just need to write the code to retrieve participants associated with a session
    function getParticipants(sessionId){
        //code to retrive all participants associated with the particular session
    }
    if(fetched === false){
        getParticipants(props.session.id);
    }

    //these participants are customer objects
    return(
        <div className="participants-list">
            {participants?.map((participant)=>(
                <div className="participant-info" key = {participant.id}>
                    <p>{participant.name}</p>
                </div>
            ))}
        </div>
    )
}