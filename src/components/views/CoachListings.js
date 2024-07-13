//will contain all of a coaches listings that they own
import { useState } from "react";
import CoachListingsList from "./CoachListingsList";
import ListingService from "../../services/ListingService";
const CoachListings = (props) => {
    const[fetched, setFetched] = useState(false);
    const[pending, setPending] = useState(true);
    const[listings, setListings] = useState(null);
console.log(props.user.id);
    function getCoachListings(coachId){
        ListingService.getAllCoachListings(coachId).then(res=>{
            setListings(res.data);
            setFetched(true);
            setPending(false);
        })
    }

    if(fetched == false){
        getCoachListings(props.user.id);
    }

    return(
        <div className="coach-listings">
            <h2>Available Listings</h2>
            {pending && <div>Loading...</div>}
            {listings && <CoachListingsList listings = {listings}/>}
        </div>
    )
}

export default CoachListings;