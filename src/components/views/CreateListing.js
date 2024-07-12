import { useState } from "react";
import { useHistory } from "react-router-dom";
import ListingService from "../../services/ListingService";
import CoachService from "../../services/CoachService";
//have a state array that contains all of the sessions that have been currently been added to this listing. might need to use bro code video on how to add objects to a state array
const CreateListing = () => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[type, setType] = useState('');
    //see if you can add the image upload thing instead.
    const[image, setImage] = useState('');//we'll come back to figuring out how to accept image files as input later
    const[price, setPrice] = useState();
    const[location, setLocation] = useState('');
    //we'll get this from sessionStorage when our login process is set up
    //const[coachId, setCoachId] = useState(354)//useState(sessionStorage.getItem('userid'));//correct this line
    //we want actually store the sessions its just for ease of viewing purposes for the coach trying to create the listing, so they know what sessions they've made for this listing
    //const [sessions, setSessions] = useState([]);
    //const[addSession, setAddSession] = useState(false);
    const[coach, setCoach] = useState(null);
    const[fetchedCoach, setFetchedCoach] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const getCoach = () => {
        CoachService.getCoachById(2/**sessionStorage.getItem('userid') */).then(res => {
            setCoach(res.data);
            setFetchedCoach(true);
        })
    }
    //when we call this method we alraedy have all our data and the coach object for this listing
    const saveListing = (e) => {
        e.preventDefault();
        setIsPending(true);
        //need to add the image field at some point
        let newListing = {title, description, type, price, location, coach};
        ListingService.createListing(newListing).then(res => {//now our listing has been added to the listing table in db
            //we wanted to add the coach object instead of coachId so that when we display the listings we can more easily access the coach name of the listing rather than having to run a query to find the coach by id
            setIsPending(false);
            history.push({pathname:'/listingverification', state: {listing : res.data}});
        });
    }
    if(fetchedCoach==false){
        getCoach();
    }
return(
        <div>
            <h1>Create Listing</h1>
            <form onSubmit={saveListing}>
                <label htmlFor="title">Listing Name: </label>
                <input id = "title" type="text" required value = {title} onChange={e=>setTitle(e.target.value)}/>
                <br />
                <label htmlFor="description">Description: </label>
                <input id = "description" type="text" required value = {description} onChange={e=>setDescription(e.target.value)}/>
                <br />
                <input type="radio" name = "type" value = "Clinic" onChange={e=>setType(e.target.value)}/>Clinic
                <input type="radio" name = "type" value = "Private" onChange={e=>setType(e.target.value)}/>Private Lesson
                <br />
                <label htmlFor="price" required>Price Per Session: </label>
                <input type="number" id = "price" required value = {price} onChange={e => setPrice(e.target.value)}/>
                <label htmlFor="location" required>Location: </label>
                <input type="text" id = "location" required value = {location} onChange={e => setLocation(e.target.value)}/>
                
                {!isPending && <button >Create</button>}
                {isPending && <button>Creating Listing</button>}
                
            </form>
        </div>
    );
}

export default CreateListing;