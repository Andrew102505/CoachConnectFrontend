import axios from 'axios';

const LISTING_API_BASE_URL = "http://localhost:8080/coachconnect/listing";

class ListingService {
    createListing(listing){
        return axios.post(LISTING_API_BASE_URL + '/', listing);
    }
    getAllListings(){
        return axios.get(LISTING_API_BASE_URL + '/');
    }
    getListingById(listingId){
        console.log(LISTING_API_BASE_URL + '/' + listingId);
        return axios.get(LISTING_API_BASE_URL + '/' + listingId);
    }
    
}

export default new ListingService();