import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import ListingService from '../../services/ListingService';
const ListingsList = (props) => {

    const listings = props.listings;//note each listing in listings has a coach object associated with them
    const history = useHistory();
    const[type, setType] = useState('');
    function goToDetails(listing){
        history.push({pathname:'/listingdetails', state : {listing: listing}});
    }
    function deleteListing(listingId){
        ListingService.deleteListing(listingId).then(res => {
            console.log("Listing Deleted");
            history.push('/listings');
            props.reloadPage();
        }).catch(err=>{
            console.log(err);
          });
    }
    return (
        <div className="listings-list">
            {listings?.map((listing)=>(
                <div className = "listing-preview" key = {listing.id} onClick={() => goToDetails(listing)}>{/**have to set event handlers equal to anonymous inner function if  arguments are being passed otherwise the function will be automatically fired when the component is mounted*/}
                    {/**<Link to = {`/listingsdetails/${listing.id}`}>*/}
                    
                    <h2>{listing.title}</h2>
                    <p>{listing.coach.firstName} {listing.coach.lastName}</p>
                    <p>{listing.location}</p>
                    <p>{listing.address}</p>
                    {sessionStorage.getItem('role')==='ADMIN' && <button onClick = {() => deleteListing(listing?.id)}>Delete</button>}

                </div>
                
            ))}
        </div>
    )
}

export default ListingsList;