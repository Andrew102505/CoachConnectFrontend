import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/coachconnect/customer/customers";

class CustomerService{

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }
}
export default new CustomerService();
