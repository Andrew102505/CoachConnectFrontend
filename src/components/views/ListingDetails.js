import { useParams, useHistory, useLocation } from "react-router-dom";
import SessionList from "./SessionList";
import { useState } from "react";
import SessionService from "../../services/SessionService";
import ListingDetailsCSS from './ListingsDetails.module.css';
const ListingDetails = (props) => {
    const location = useLocation();
    const listing = location.state.listing;
    //console.log(listing);
    /*
    const{id} = useParams
    const history = useHistory();
    */
    const[sessions, setSessions] = useState(null);
    const[fetched, setFetched] = useState(false);
    const[errorMessage, setErrorMessage] = useState('');
    /*
    const{id} = useParams
    const history = useHistory();
    */
    function getSessions(listingId){
        SessionService.getListingsSessions(listingId).then(res => {
            //console.log("sessions-------------------");
            //console.log(res.data);
            setSessions(res.data);
            setFetched(true);

        }).catch(err=>{
            console.log(err);
          });
    }
    if(fetched===false){
        getSessions(listing.id);
    }
    function updateErrorMessage(message){
        setErrorMessage(message);
    }
    function reloadPage(){
        window.location.reload();
    }
    return (
        <div className={ListingDetailsCSS.listingdetails}>
            <table className = {ListingDetailsCSS.info}>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Title </td>
                        <td className = {ListingDetailsCSS.data}>{listing.title}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>About </td>
                        <td className = {ListingDetailsCSS.data}>{listing.description}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Coach </td>
                        <td className = {ListingDetailsCSS.data}>{listing.coach.firstName} {listing.coach.lastName}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Type </td>
                        <td className = {ListingDetailsCSS.data}>{listing.type}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Price </td>
                        <td className = {ListingDetailsCSS.data}>${listing.price}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Location</td>
                        <td className = {ListingDetailsCSS.data}>{listing.location}</td>
                    </tr>
                    <tr>
                        <td className = {ListingDetailsCSS.category}>Address</td>
                        <td className = {ListingDetailsCSS.data}>{listing.address}</td>
                    </tr>
                </table>
            <h2>Available Sessions</h2>
            {errorMessage!=='' && <p>Cannot add to cart - Already enrolled in Session: {errorMessage}</p>}
            <SessionList listingId = {listing.id} sessions = {sessions} addSessionToCart = {props.addSessionToCart} updateErrorMessage = {updateErrorMessage} user = {props?.user} cart = {props?.cart} listing = {listing} reloadPage = {reloadPage}/>
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