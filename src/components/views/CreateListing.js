import { useState } from "react";
import { useHistory } from "react-router-dom";
import ListingService from "../../services/ListingService";
import CoachService from "../../services/CoachService";
import CreateListingCSS from './CreateListing.module.css';
//have a state array that contains all of the sessions that have been currently been added to this listing. might need to use bro code video on how to add objects to a state array
const CreateListing = () => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[type, setType] = useState('');
    //see if you can add the image upload thing instead.
    const[image, setImage] = useState('');//we'll come back to figuring out how to accept image files as input later
    const[price, setPrice] = useState();
    const[location, setLocation] = useState('');
    const[address, setAddress] = useState('');
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
        CoachService.getCoachById(sessionStorage.getItem('userId')).then(res => {
            setCoach(res.data);
            setFetchedCoach(true);
        })
    }
    //when we call this method we alraedy have all our data and the coach object for this listing
    const saveListing = (e) => {
        e.preventDefault();
        setIsPending(true);
        //need to add the image field at some point
        let newListing = {title, description, type, price, location, coach, address};
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
        <div className = {CreateListingCSS.createlisting}>
            <h2>Create Listing</h2>
            <form onSubmit={saveListing}>
            <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="title"></label>
                <input id = "title" type="text" placeholder="Listing name" required value = {title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <br />
                <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="description"></label>
                <input id = "description" type="text" placeholder="Description" required value = {description} onChange={e=>setDescription(e.target.value)}/>
                </div>
                <br />
                
                <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="type"></label>
                <input id = "type" type="text" placeholder="Lesson Type: Clinic or Private" required value = {type} onChange={e=>setType(e.target.value)}/>
                </div>
                <br />
                <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="price" required></label>
                <input type="number" id = "price" placeholder="Price Per Session" required value = {price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <br />
                <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="location" required></label>
                <input type="text" id = "location" required placeholder="Location" value = {location} onChange={e => setLocation(e.target.value)}/>
                </div>
                <br />
                <div className = {CreateListingCSS.inputbox}>
                <label htmlFor="address" required></label>
                <input type="text" id = "address" placeholder="Address" required value = {address} onChange={e => setAddress(e.target.value)}/>
                </div>
                <br />
                {!isPending && <button >Create</button>}
                {isPending && <button>Creating Listing</button>}
                
            </form>
        </div>
    );
}

export default CreateListing;