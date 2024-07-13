import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/coachconnect/admin";

class AdminService{
    getAdminById(adminId){
        return axios.get(ADMIN_API_BASE_URL + '/' + adminId)
    }
}

export default new AdminService();