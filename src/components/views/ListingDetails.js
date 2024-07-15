import { useParams, useHistory, useLocation } from "react-router-dom";
import SessionList from "./SessionList";
import { useState } from "react";
import SessionService from "../../services/SessionService";
const ListingDetails = (props) => {
    const location = useLocation();
    const listing = location.state.listing;
    console.log(listing);
    /*
    const{id} = useParams
    const history = useHistory();
    */
    const[sessions, setSessions] = useState(null);
    const[fetched, setFetched] = useState(false);
    const[errorDate, setErrorDate] = useState('');
    /*
    const{id} = useParams
    const history = useHistory();
    */
    function getSessions(listingId){
        SessionService.getListingsSessions(listingId).then(res => {
            console.log("sessions-------------------");
            console.log(res.data);
            setSessions(res.data);
            setFetched(true);

        }).catch(err=>{
            console.log(err);
          });
    }
    if(fetched===false){
        getSessions(listing.id);
    }
    function updateErrorDate(date){
        setErrorDate(date);
    }
    return (
        <div>
            <h2>{listing.title}</h2>
            <p>About: {listing.description}</p>
            <p>Coach: {listing.coach.firstName} {listing.coach.lastName}</p>
            <p>Type: {listing.type}</p>
            <p>Price: {listing.price}</p>
            <p>Location: {listing.location}</p>
            <h3>Available Sessions</h3>
            {errorDate!=='' && <p>Cannot add to cart - Already enrolled in Session: {errorDate}</p>}
            <SessionList listingId = {listing.id} sessions = {sessions} addSessionToCart = {props.addSessionToCart} updateErrorDate = {updateErrorDate} user = {props?.user}/>
            {/**display all the sessions by going threw db and finding all sessions with listing id of listing.id
             * display all of those sessions using the .map function c, basically inject component like you did with Listings
             * and in the session list component for each component add a button that says purchase that will say add to cart
             * make a shopping cart(array) with session storage like you did in the project and make a component for displaying cart items
             * and in that component have a button that says checkout that will take the user to the checkout page where the paywall is
             */}
        </div>
    )

}

export default ListingDetails;