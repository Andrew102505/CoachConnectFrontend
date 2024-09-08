import { useState } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import CoachSessionList from './CoachSessionList';
import CoachListingDetailsCSS from './CoachListingDetails.module.css';
const CoachListingDetails = () => {
    const location = useLocation();
    const listing = location.state.listing;
    const history = useHistory();
    function createSession(){
        history.push({pathname: '/createsession', state:{listing:listing}});
    }
    return (
        <div className={CoachListingDetailsCSS.coachlistingdetails}>
            <h2>{listing.title}</h2>
            <table className = {CoachListingDetailsCSS.info}>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>About </td>
                        <td className = {CoachListingDetailsCSS.data}>{listing.description}</td>
                    </tr>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>Coach </td>
                        <td className = {CoachListingDetailsCSS.data}>{listing.coach.firstName} {listing.coach.lastName}</td>
                    </tr>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>Type </td>
                        <td className = {CoachListingDetailsCSS.data}>{listing.type}</td>
                    </tr>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>Price </td>
                        <td className = {CoachListingDetailsCSS.data}>${listing.price}</td>
                    </tr>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>Location </td>
                        <td className = {CoachListingDetailsCSS.data}>{listing.location}</td>
                    </tr>
                    <tr>
                        <td className = {CoachListingDetailsCSS.category}>Address</td>
                        <td className = {CoachListingDetailsCSS.data}>{listing.address}</td>
                    </tr>
                </table>
            <h3>Sessions for this Listings: </h3>
            {/**displays all the sessions associated with this listing */}
            <CoachSessionList listing = {listing}/>
            <button onClick = {createSession}>Add Session</button>
        </div>
    )

}

export default CoachListingDetails;