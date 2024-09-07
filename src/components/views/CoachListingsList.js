import { useHistory } from "react-router-dom";
import { useState } from "react";
import CoachListingsListCSS from './CoachListingsList.module.css';
const CoachListingsList = (props) => {

    const listings = props.listings;
    const history = useHistory();

    //we will create a details page that has more info like the names of the participants etc
    function goToDetails(listing){
        //push to the coach specific listing details page
        history.push({pathname:'/coachlistingdetails', state:{listing:listing}});
    }

    return (
        <div className = {CoachListingsListCSS.listingslist}>
            {listings.map((listing)=>(
                <div className={CoachListingsListCSS.listingpreview} key = {listing.id} onClick={()=>goToDetails(listing)}>
                    
                    <h2 className={CoachListingsListCSS.title}>{listing.title}</h2>
                    <div className={CoachListingsListCSS.info}>
                    <p><span>Coach:</span> {listing.coach.firstName} {listing.coach.lastName}</p>
                    <p><span>Area: </span>  {listing.location}</p>
                    <p><span>Location: </span> {listing.address}</p>
                </div>
                </div>
            ))}
        </div>
    )
}

export default CoachListingsList;