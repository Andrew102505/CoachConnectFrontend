import { useHistory } from "react-router-dom";
import { useState } from "react";
const CoachListingsList = (props) => {

    const listings = props.listings;
    const history = useHistory();

    //we will create a details page that has more info like the names of the participants etc
    function goToDetails(listing){
        //push to the coach specific listing details page
        history.push({pathname:'/coachlistingdetails', state:{listing:listing}});
    }

    return (
        <div className = "listings-list">
            {listings.map((listing)=>(
                <div className="listing-preview" key = {listing.id} onClick={()=>goToDetails(listing)}>
                    <h2>{listing.title}</h2>
                    <p>{listing.location}</p>
                    <p>{listing.address}</p>
                </div>
            ))}
        </div>
    )
}

export default CoachListingsList;