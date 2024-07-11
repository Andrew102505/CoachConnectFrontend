import {Link} from 'react-router-dom';
const CoachList = (props) => {
    const coaches = props.coaches;
    console.log(coaches);
    const printLevels = coach => {
        let stringLevels = '';
        coach.levels.forEach(element => {
            stringLevels += element
        });
        return stringLevels;
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
                </div>

            ))};
        </div>
    )
}

export default CoachList;