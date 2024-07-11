import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/coachconnect/login";

class LoginService {
    authenticateUser(role, token){//the naming of this method does not have to be the same as the one this calls in the backend, the backend method is called by the url passed
        return axios.post(LOGIN_API_BASE_URL + '/' + role + '/', token);
    }
}

export default new LoginService();