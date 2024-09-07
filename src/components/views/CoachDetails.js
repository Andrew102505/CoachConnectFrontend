import {useParams} from 'react-router-dom';
import { useState } from 'react';
import CoachService from '../../services/CoachService';
import CoachDetailsCSS from './CoachDetails.module.css';
const CoachDetails = () => {
    
    //todo you need to create a service method to fetch coach by id and display the info in the coach details page
    //add your routes in app.js
    //then go back end start ****testing this coach listing part and everything to do with it, need to test
    //could have used push method and passed coach as state data from the CoachList component instead 
    const{id} = useParams();
    const[coach, setCoach] = useState(null);
    const[fetched, setFetched] = useState(false);
    
    //we need to set coach(anything that relies on async function) to be a state var because it will initially be null but when updated it will rerender the component
    //if we set const coach = CoachServce.getCoachById(id)... then we would have all null values rendered at first and when it finally was set equal to something the component would not rerender because it is not a state var
    const getCoach = () =>{
        CoachService.getCoachById(id).then(res => {
            let fetchedCoach = res.data;
            setCoach(fetchedCoach);
            setFetched(true);
        }).catch(err=>{
            console.log(err);
          });
    } 

    

    const printLevels = coach => {
        let stringLevels = '';
        coach?.levels.forEach(element => {
            stringLevels += element + " "
        });
        return stringLevels;
    }

    if(fetched === false){
        getCoach();
    }

    return (
        <div className={CoachDetailsCSS.coachdetails}>
            {coach &&(
                <table className = {CoachDetailsCSS.info}>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>Name </td>
                        <td className = {CoachDetailsCSS.data}>{coach.firstName} {coach?.lastName}</td>
                    </tr>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>Coaching Levels </td>
                        <td className = {CoachDetailsCSS.data}>{printLevels(coach)}</td>
                    </tr>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>Years Playing Tennis </td>
                        <td className = {CoachDetailsCSS.data}>{coach?.yearsOfExperience}</td>
                    </tr>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>USTA NTPR Rating</td>
                        <td className = {CoachDetailsCSS.data}>{coach?.ustaRating}</td>
                    </tr>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>{coach.firstName}'s Bio</td>
                        <td className = {CoachDetailsCSS.data}>{coach?.bio}</td>
                    </tr>
                    <tr>
                        <td className = {CoachDetailsCSS.category}>Coaching Area</td>
                        <td className = {CoachDetailsCSS.data}>{coach?.location}</td>
                    </tr>
                </table>
            )}
        </div>
    )
}

export default CoachDetails;