//this will set up a 

import { useState } from "react"
import SessionService from "../../services/SessionService";

//upon signing up we are going to need to make use of the sessionRepository to retrieve all participants for that session
const ParticipantsList = (props) => {

    const[fetched, setFetched] = useState(false);
    const[participants, setParticipants] = useState(null);
    
    
     //just need to write the code to retrieve participants associated with a session
     function getParticipants(sessionId){
        //code to retrive all participants associated with the particular session
        SessionService.getSessionParticipants(sessionId).then(res => {
            setParticipants(res.data);//will cause the component to rerender
            setFetched(true);//will also cause component to rerender
        }).catch(err=>{
            console.log(err);
          });
    }
    if(fetched === false){
        //we're passed this session object from the coachsessionlist component
        getParticipants(props.session.id);
        
    }

    //these participants are customer objects
    return(
        <div className="participants-list">
            {participants?.map((participant)=>(
                <div className="participant-info" key = {participant.id}>
                    <p>{participant.firstName} {participant.lastName}</p>
                </div>
            ))}
        </div>
    )
}

export default ParticipantsList;