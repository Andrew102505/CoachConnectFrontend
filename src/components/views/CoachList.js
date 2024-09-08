import {Link, useHistory} from 'react-router-dom';
import CoachService from '../../services/CoachService';
import CoachListCSS from './CoachList.module.css';
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
    function goToDetails(coachId){
        history.push('/coachdetails/' + coachId);
    }
    return(
        <div className = {CoachListCSS.coachlist}>
            {coaches.map((coach)=> (
                <div className={CoachListCSS.coachpreview} key = {coach.id}>
                    {/**this link takes us to the coach-details page for this coach */}
                    <Link to = {`/coachdetails/${coach.id}`} className={CoachListCSS.coachlink}>
                        <h2 className = {CoachListCSS.title}>{coach.firstName} {coach.lastName}</h2>
                        <div className={CoachListCSS.info}>
                        <p><span>Location:</span> {coach.location}</p>
                        <p><span>Coaching Levels:</span> {printLevels(coach)}</p>
                        <button onClick={()=>goToDetails(coach.id)}>Details</button>
                        {sessionStorage.getItem('role')==='ADMIN' && <button onClick = {() => deleteCoach(coach?.id)}>Delete</button>}
                        </div>
                    </Link>
                    
                </div>

            ))};
        </div>
    )
}

export default CoachList;