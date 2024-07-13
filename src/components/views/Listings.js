import ListingService from "../../services/ListingService"
import ListingsList from "./ListingsList";
import { useState } from "react";
const Listings = () => {
    const[fetched, setFetched] = useState(false);
    const[pending, setPending] = useState(true);
    const[listings, setListings] = useState(null);
    function getListings(){
        ListingService.getAllListings().then(res => {
            setListings(res.data);
            setFetched(true);
            setPending(false);
        })
    }
    
    if(fetched==false){
        getListings();
    }
    return (
        <div className = "listing-page">
            <h2>Available Listings</h2>
            {pending && <div>Loading...</div>}
            {listings && <ListingsList listings = {listings}/>}
        </div>
    )
}

export default Listings;