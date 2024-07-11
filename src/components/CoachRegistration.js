import { useState } from "react";
import {useHistory} from 'react-router-dom';
import CoachService from "../services/CoachService";
import Select from 'react-select'; 
const CoachRegistration = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [levelsObjectArray, setLevelsObjectArray] = useState([]);
    const [yearsOfExperience, setYearsOfExperience] = useState(null);
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();
    const options = [{value: "Beginner", label: "Beginner"}, {value: "Intermediate", label: "Intermediate"}, {value: "Advanced", label: "Advanced"}];
    
    const handleSelect = (selectedOption) => {
        
        setLevelsObjectArray(selectedOption);
       
    }

    const saveCoach = (e) => {

        e.preventDefault();
     
        const coach = {firstName, lastName, email, password, levelsObjectArray, yearsOfExperience, bio, location};
        setIsPending(true);
        console.log('coach => ' + JSON.stringify(coach));
        CoachService.createCoach(coach).then(res => {
            setIsPending(false);
            history.push('/');
        });
    }
    return (
        <div className="coach-registration">'
        
        <h2>Create Account</h2>
        <form onSubmit={saveCoach}>{/**calls the function when a form is submitted */}
            <label htmlFor="firstname">First Name: </label>
            {/**e is the event object, target is the input element, value is whatever we are trying to type into it  */}
            {/**when the input field is changed, the onChange function will be fired and will use the set function to update the state variable with the text entered in the input field and the value of the input field is dynamically updated */}
            <input id = "firstname" type="text" required value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <br></br>
            <label htmlFor="lastname" required>Last Name: </label>
            <input id = "lastname" type = "text" required value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
            <br></br>
            <label htmlFor="email" required>Email: </label>
            <input id = "email" type = "text" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <label htmlFor="password" required>Password: </label>
            <input id = "password" type = "text" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <label htmlFor="levels" required>Select all skill levels you are interested in coaching: </label>
            {/**have to install react select in terminal to use this Select tag */}
            <Select options = {options} value = {levelsObjectArray} onChange={handleSelect} isMulti = {true}/>
            
            <br></br>
            <br></br>
            <label htmlFor="yearsOfExperience" required>Years of Experience Playing Tennis: </label>
            <input id = "yearsOfExperience" type = "number" required value = {yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)}/>
            <br></br>
            <label htmlFor="bio" required>Bio: </label>
            <input id = "bio" type = "text" required value = {bio} onChange={(e) => setBio(e.target.value)}/>
            <br></br>
            <label htmlFor="location" required>Primary coaching area - format: city, state </label>
            <input id = "location" type = "text" required value = {location} onChange={(e) => setLocation(e.target.value)}/>
            <br></br>
            {/**the button attribute will ilicit a submit event */}
            {!isPending && <button >Create</button>}
            {isPending && <button>Creating Account</button>}
            
        </form>
    </div>
    )
}   

export default CoachRegistration;