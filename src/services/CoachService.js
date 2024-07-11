import axios from 'axios';

const COACH_API_BASE_URL = "http://localhost:8080/coachconnect/coach/coaches";

class CoachService {
    createCoach(coach){//the naming of this method does not have to be the same as the one this calls in the backend, the backend method is called by the url passed
        return axios.post(COACH_API_BASE_URL, coach);
    }
    getAllCoaches(){
        return axios.get(COACH_API_BASE_URL);
    }
    getCoachById(id){
        return axios.get(COACH_API_BASE_URL + '/' + id);
    }
}


export default new CoachService();