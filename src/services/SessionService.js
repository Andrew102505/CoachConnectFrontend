import axios from 'axios';

const SESSION_API_BASE_URL = "http://localhost:8080/coachconnect/session"

class SessionService {
    createSession(session){
        return axios.post(SESSION_API_BASE_URL + '/', session);
    }

    getSessionById(sessionId){
        return axios.get(SESSION_API_BASE_URL + '/' + sessionId);
    }

    getListingsSessions(listingId){
        return axios.get(SESSION_API_BASE_URL + '/listingsessions/' + listingId);
    }

    addParticipantToSession(sessionId, customer){
        console.log("????????????");
        console.log(sessionId);
        return axios.put(SESSION_API_BASE_URL + '/addparticipant/' + sessionId, customer);
    }
    getSessionParticipants(sessionId){
        return axios.get(SESSION_API_BASE_URL + '/getsessionparticipants/' + sessionId);
    }
}

export default new SessionService();
