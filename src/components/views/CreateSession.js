import {useLocation, useHistory} from 'react-router-dom';
import {useState} from 'react';
import CoachService from '../../services/CoachService';
import SessionService from '../../services/SessionService';
const CreateSession = () => {
    const[startTime, setStartTime] = useState('00:00 am/pm');
    const[endTime, setEndTime] = useState('00:00 am/pm');
    const[time, setTime] = useState(null);
    const[session, setSession] = useState(null);
    const[date, setDate] = useState('mm/dd/yyyy');
    const[capacity, setCapacity] = useState(null);
    const location = useLocation();
    const[listingId, setListingId] = useState(location.state?.listing.id);
    const history = useHistory();
    
    function saveSession(e){//when this method is called we already have all of our vars to create a session object
        e.preventDefault();
        let concatTime = `${startTime} - ${endTime}`;
        setTime(concatTime);
        let newSession = {time, date, listingId, capacity};
        setSession(newSession);
        //now call the session service to store this session to the db
        SessionService.createSession(newSession).then(res => {
            //do something once this session is saved, probably setting some boolean var in createlisting to false so this conditionally rendered component will go away
            //have the post method return the listing id because we will store that id in the 
            //now the session we created has been stored to the db and we have the session in res.data
            history.push({pathname:'/sessionverification', state : {listing: location.state?.listing}});//we do this so we can keep passing this listing object around as we create new sessions for a specific listing

        });
    }
    return (
        <div>
            <h2>Create a Session</h2>
            <form onSubmit={saveSession}>
                <label htmlFor="startTime">Start Time: </label>
                <input id = "startTime" type="text" required value = {startTime} onChange={(e) => setStartTime(e.target.value)}/>
                <br></br>
                <label htmlFor="endTime">End Time: </label>
                <input id = "endTime" type="text" required value = {endTime} onChange={(e) => setEndTime(e.target.value)}/>
                <br></br>
                <label htmlFor="date">Date: </label>
                <input id = "date" type="text" required value = {date} onChange={(e) => setDate(e.target.value)}/>
                <br></br>
                <label htmlFor="capacity">Capacity: </label>
                <input id = "capacity" type="number" required value = {capacity} onChange={(e) => setCapacity(e.target.value)}/>
                <br></br>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateSession;