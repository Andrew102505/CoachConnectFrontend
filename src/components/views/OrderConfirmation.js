import {useLocation} from 'react-router-dom';
const OrderConfirmation = () => {
    const location = useLocation();
    const sessions = location.state?.order;
    return (
        <div className = "receipt">
        <h2>You Order was Processed Successfully</h2>
        <br />
        <h3>Receipt</h3>
        <div className = "sessions">
        {sessions?.map((session)=>(
                <div className="session-info" key = {session.id}>
                    <p>{session?.date}</p>
                    <p>{session?.time}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default OrderConfirmation;