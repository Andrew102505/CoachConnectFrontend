import ListingService from "../../services/ListingService"
import ListingsList from "./ListingsList";
import PrivateLessonList from "./PrivateLessonList";
import ClinicList from "./ClinicList";
import { useState } from "react";
import ListingsCSS from './Listings.module.css'
const Listings = () => {
    const[fetched, setFetched] = useState(false);
    const[pending, setPending] = useState(true);
    const[listings, setListings] = useState(null);
    const[type, setType] = useState('');
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
    function reloadPage(){
        window.location.reload();
    }
    return (
        <div className = {ListingsCSS.listingspage}>
            <h2>Available Listings</h2>
            <h4>Filter</h4>
            <button onClick = {() => setType('Private')}>Private Lessons</button>
            <button onClick = {() => setType('Clinic')}>Clinics</button>
            {pending && <div>Loading...</div>}
            {listings && type === '' && <ListingsList listings = {listings} reloadPage = {reloadPage}/>}
            {listings && type === 'Private' && <PrivateLessonList listings = {listings}/>}
            {listings && type === 'Clinic' && <ClinicList listings = {listings}/>}
        </div>
    )
}

export default Listings;