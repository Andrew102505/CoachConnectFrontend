//will contain all of a coaches listings that they own
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import CoachListingsList from "./CoachListingsList";
import ListingService from "../../services/ListingService";
const CoachListings = (props) => {
    const[fetched, setFetched] = useState(false);
    const[pending, setPending] = useState(true);
    const[listings, setListings] = useState(null);
    const history = useHistory();
    if(sessionStorage.getItem('role')!=='COACH'){
        history.push('/coachesonly');
    }
    function getCoachListings(coachId){
        ListingService.getAllCoachListings(coachId).then(res=>{
            setListings(res.data);
            setFetched(true);
            setPending(false);
        })
    }
//this works because when the user is initialized in the App.js component, then this component will also be rerendered and user will not be null, it also prevents us from moving forward with null values and getting errors
    if(props.user !== null && fetched == false){
        getCoachListings(props.user.id);
    }

    return(
        <div className="coachlistings">
            <h1>My Listings</h1>
            {pending && <div>Loading...</div>}
            {listings && <CoachListingsList listings = {listings}/>}
        </div>
    )
}

export default CoachListings;