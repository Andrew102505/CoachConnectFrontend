import { useState } from "react";
import {useHistory} from 'react-router-dom';
import CoachService from "../../services/CoachService";
import Select from 'react-select'; 
import CoachRegistrationCSS from './CoachRegistration.module.css';
const CoachRegistration = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [levelsObjectArray, setLevelsObjectArray] = useState([]);
    const [yearsOfExperience, setYearsOfExperience] = useState(null);
    const [ustaRating, setUSTARating] = useState(null);
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
     
        const coach = {firstName, lastName, email, password, levelsObjectArray, yearsOfExperience, ustaRating, bio, location};
        setIsPending(true);
        console.log('coach => ' + JSON.stringify(coach));
        CoachService.createCoach(coach).then(res => {
            setIsPending(false);
            sessionStorage.setItem('userId', `${res.data.id}`);
            sessionStorage.setItem('role', `${res.data.role}`);
            props.initializeUser();
            props.Clear();
            history.push('/');
        });
    }
    return (
        <div className={CoachRegistrationCSS.coachregistration}>'
        
        <h2>Create Account</h2>
        <form onSubmit={saveCoach}>{/**calls the function when a form is submitted */}
        <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="firstname"></label>
            {/**e is the event object, target is the input element, value is whatever we are trying to type into it  */}
            {/**when the input field is changed, the onChange function will be fired and will use the set function to update the state variable with the text entered in the input field and the value of the input field is dynamically updated */}
            <input id = "firstname" type="text" placeholder="First name" required value = {firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="lastname" required></label>
            <input id = "lastname" type = "text" placeholder="Last name" required value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="email" required></label>
            <input id = "email" type = "text" placeholder="Email" required value = {email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="password" required></label>
            <input id = "password" type = "text" placeholder="Password" required value = {password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br></br>
            <br></br>
            <label htmlFor="levels" required></label>
            {/**have to install react select in terminal to use this Select tag */}
            <Select options = {options} value = {levelsObjectArray} placeholder = "Coaching Levels" onChange={handleSelect} isMulti = {true}/>
            
            <br></br>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="yearsOfExperience" required> </label>
            <input id = "yearsOfExperience" type = "number" placeholder="Years of Experience" required value = {yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="ustaRating" required></label>
            <input id = "ustaRating" type = "number" placeholder="USTA NTPR Rating" required value = {ustaRating} onChange={(e) => setUSTARating(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="bio" required></label>
            <input id = "bio" type = "text" placeholder="Bio" required value = {bio} onChange={(e) => setBio(e.target.value)}/>
            </div>
            <br></br>
            <div className = {CoachRegistrationCSS.inputbox}>
            <label htmlFor="location" required></label>
            <input id = "location" type = "text" placeholder="Coaching area - format: city, state" required value = {location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <br></br>
            {/**the button attribute will ilicit a submit event */}
            {!isPending && <button >Create</button>}
            {isPending && <button>Creating Account</button>}
            
        </form>
    </div>
    )
}   

export default CoachRegistration;