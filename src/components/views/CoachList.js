import {Link, useHistory} from 'react-router-dom';
import CoachService from '../../services/CoachService';
const CoachList = (props) => {
    const coaches = props.coaches;
    const history = useHistory();
    console.log(coaches);
    const printLevels = coach => {
        let stringLevels = '';
        coach.levels.forEach(element => {
            stringLevels += element + " "
        });
        return stringLevels;
    }
    function deleteCoach(coachId){
        CoachService.deleteCoach(coachId).then(res => {
            console.log("Coach Deleted");
            history.push('/coaches');
            props.reloadPage();
        }).catch(err=>{
            console.log(err);
          });
    }
    return(
        <div className = "coach-list">
            {coaches.map((coach)=> (
                <div className="coach-preview" key = {coach.id}>
                    {/**this link takes us to the coach-details page for this coach */}
                    <Link to = {`/coachdetails/${coach.id}`}>
                        <h2>{coach.firstName} {coach.lastName}</h2>
                        <p>Location: {coach.location}</p>
                        <p>Coaching Levels: {printLevels(coach)}</p>
                    </Link>
                    {sessionStorage.getItem('role')==='ADMIN' && <button onClick = {() => deleteCoach(coach?.id)}>Delete</button>}
                </div>

            ))};
        </div>
    )
}

export default CoachList;