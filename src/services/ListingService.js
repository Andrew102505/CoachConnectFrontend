import axios from 'axios';

const LISTING_API_BASE_URL = "http://localhost:8080/coachconnect/listing";

class ListingService {
    createListing(listing){
        return axios.post(LISTING_API_BASE_URL + '/', listing);
    }

    
}

export default new ListingService();