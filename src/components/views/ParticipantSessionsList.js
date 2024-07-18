const ParticipantSessionsList = (props) => {

    const participantSessions = props.participantSessions;
    console.log(participantSessions);
    return(
        <div>
             {participantSessions.map((session)=>(
            <div className = "participant-sessions" key = {session.id}>
                <p>Session: {session.date}</p>

            </div>
        ))}
        </div>
    )
}

export default ParticipantSessionsList;