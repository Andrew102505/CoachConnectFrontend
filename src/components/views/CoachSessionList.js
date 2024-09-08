//very similar to the SessionList component but just adds extra information for each sesion
import { useState } from "react";
import SessionService from "../../services/SessionService";
import ParticipantsList from "./ParticipantsList";
import CoachSessionListCSS from './CoachSessionList.module.css';
const CoachSessionList = (props) => {

    const listingId = props.listing.id;
    const[fetched, setFetched] = useState(false);
    const[sessions, setSessions] = useState(null);
    const[viewParticipants, setViewParticipants] = useState(false);
    function getSessions(listingId){
        SessionService.getListingsSessions(listingId).then(res => {
            setSessions(res.data);
            setFetched(true);

        }).catch(err=>{
            console.log(err);
          });
    }
    if(fetched == false){
        getSessions(listingId);
    }
    function toggleViewParticipants(){
        setViewParticipants(!viewParticipants);
    }
    //now in sessions we have every session associated with this listing
    //in here we need to find every participant associated with this session, but we need to make it so that people can sign up for these sessions first
    return(
        <div className = {CoachSessionListCSS.sessionlist}>
            {sessions?.map((session) => (
            <div className={CoachSessionListCSS.sessionpreview} key = {session.id}>
                <h2 className={CoachSessionListCSS.title}>{session?.name}</h2>
                <div className={CoachSessionListCSS.info}>
                <p><span>Date:</span> {session?.date}</p>
                <p><span>Time: </span>  {session?.time}</p>
                <p><span>Status: </span> {session?.numParticipants}/{session.capacity} enrolled</p>
                {/**have button that says view participants */}
                {viewParticipants===false && <button onClick={toggleViewParticipants}>View Players</button>}
                {viewParticipants && <button onClick={toggleViewParticipants}>Close</button>}
                {viewParticipants && <ParticipantsList session = {session}/>}
            </div>
            </div>
            ))}
        </div>
    )

}

export default CoachSessionList;