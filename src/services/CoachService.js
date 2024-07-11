import axios from 'axios';

const COACH_API_BASE_URL = "http://localhost:8080/coachconnect/coach/coaches";

class CoachService {
    createCoach(coach){//the naming of this method does not have to be the same as the one this calls in the backend, the backend method is called by the url passed
        return axios.post(COACH_API_BASE_URL, coach);
    }
}

export default new CoachService();