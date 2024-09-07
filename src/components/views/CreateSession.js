import {useLocation, useHistory} from 'react-router-dom';
import {useState} from 'react';
import CoachService from '../../services/CoachService';
import SessionService from '../../services/SessionService';
import CreateSessionCSS from './CreateSession.module.css';
const CreateSession = () => {
    const[name, setName] = useState('');
    const[startTime, setStartTime] = useState('00:00 am/pm');
    const[endTime, setEndTime] = useState('00:00 am/pm');
    const[time, setTime] = useState(null);
    const[session, setSession] = useState(null);
    const[date, setDate] = useState('mm/dd/yyyy');
    const[capacity, setCapacity] = useState(null);
    const location = useLocation();
    const[listingId, setListingId] = useState(location.state?.listing.id);
    const history = useHistory();
    const[title, setTitle] = useState(location.state?.listing.title);
    function saveSession(e){//when this method is called we already have all of our vars to create a session object
        e.preventDefault();
        let concatTime = `${startTime} - ${endTime}`;
        setTime(concatTime);
        let newSession = {time, date, listingId, capacity, name, title};
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
        <div className = {CreateSessionCSS.createsession}>
            <h2>Create a Session</h2>
            <form onSubmit={saveSession}>
            <div className = {CreateSessionCSS.inputbox}>
                <label htmlFor="name"></label>
                <input id = "name" type="text" placeholder='Name' required value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CreateSessionCSS.inputbox}>
                <label htmlFor="startTime"></label>
                <input id = "startTime" type="text" placeholder='Start Time' required value = {startTime} onChange={(e) => setStartTime(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CreateSessionCSS.inputbox}>
                <label htmlFor="endTime"></label>
                <input id = "endTime" type="text" placeholder='End Time' required value = {endTime} onChange={(e) => setEndTime(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CreateSessionCSS.inputbox}>
                <label htmlFor="date"></label>
                <input id = "date" type="text" placeholder='Date' required value = {date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <br></br>
                <div className = {CreateSessionCSS.inputbox}>
                <label htmlFor="capacity"> </label>
                <input id = "capacity" type="number" placeholder='Capacity' required value = {capacity} onChange={(e) => setCapacity(e.target.value)}/>
                </div>
                <br></br>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateSession;