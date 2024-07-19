import { useState } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import CoachSessionList from './CoachSessionList';

const CoachListingDetails = () => {
    const location = useLocation();
    const listing = location.state.listing;
    const history = useHistory();
    function createSession(){
        history.push({pathname: '/createsession', state:{listing:listing}});
    }
    return (
        <div>
            <h2>{listing.title}</h2>
            <p>About: {listing.description}</p>
            <p>Coach: {listing.coach.firstName} {listing.coach.lastName}</p>
            <p>Type: {listing.type}</p>
            <p>Price: {listing.price}</p>
            <p>Location: {listing.location}</p>
            <p>Address: {listing.address}</p>
            <h3>Sessions for this Listings: </h3>
            {/**displays all the sessions associated with this listing */}
            <CoachSessionList listing = {listing}/>
            <button onClick = {createSession}>Add Session</button>
        </div>
    )

}

export default CoachListingDetails;