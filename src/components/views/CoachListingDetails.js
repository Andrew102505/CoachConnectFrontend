import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import CoachSessionList from './CoachSessionList';
const CoachListingDetails = () => {
    const location = useLocation();
    const listing = location.state.listing;
   
    return (
        <div>
            <h2>{listing.title}</h2>
            <p>About: {listing.description}</p>
            <p>Coach: {listing.coach.firstName} {listing.coach.lastName}</p>
            <p>Type: {listing.type}</p>
            <p>Price: {listing.price}</p>
            <p>Location: {listing.location}</p>
            <h3>Sessions for this Listings: </h3>
            {/**displays all the sessions associated with this listing */}
            <CoachSessionList listing = {listing}/>
        </div>
    )

}

export default CoachListingDetails;