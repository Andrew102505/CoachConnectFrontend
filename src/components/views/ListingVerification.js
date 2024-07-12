import {Link} from "react-router-dom";
import {useLocation, useHistory} from 'react-router-dom';
const ListingVerification = () => {
    
    const location = useLocation();
    //const newListing = location.state?.listing;
    const history = useHistory();
    //here we will display all the information about the listing created.
    //on listing page for admin we will provide a button using conditional templating next to each listing that says remove and when clicked it will call a method that calls the ListingService and deleted the method(create a delete method in the listing service)
    //this will all be done in the Listing component
    const createSession = () => {
        history.push({pathname: '/createsession', state: {listing: location.state?.listing}});
    }
    return (
        <div>
            <h2>Listing Created!</h2>
            <button onClick = {createSession}>Add Sessions to Listing</button>
            
        </div>
    )
}

export default ListingVerification;
//for the whole session storage thing we just have to pass the method to the login and register methods and update localstorage
//with values after the requests to the api have been made

//if a coach is logged in, they will have a tab called my listings
//in their it will contains their listings(for this page we'll have a custom jpql query that gets all the listings with the 
//logged in coachs id from session storage and then we'll map all of those)