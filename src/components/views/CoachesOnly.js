import {Link} from 'react-router-dom';
const CoachesOnly = () => {

    return(
        <div>
            <h1>Unfortunately this feature is only available to coaches!</h1>
            <br />
            <h3>You can follow the link below and register to be a coach.</h3>
            
            <Link to = "/registercoach">
                <h4>Become a Coach!</h4>
            </Link>
        </div>
    )
}

export default CoachesOnly;