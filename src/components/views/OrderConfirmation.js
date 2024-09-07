import {useLocation} from 'react-router-dom';
import OrderConfirmationCSS from './OrderConfirmation.module.css';
const OrderConfirmation = () => {
    const location = useLocation();
    const sessions = location.state?.order;
    return (
        <div className = "receipt">
        <h2>You Order was Processed Successfully</h2>
        <br />
        <h3>Receipt</h3>
        <div className = {OrderConfirmationCSS.receiptlist}>
        {sessions?.map((session)=>(
                <div className={OrderConfirmationCSS.sessionpreview} key = {session.id}>
                    <h2 className={OrderConfirmationCSS.title}>{session?.name}</h2>
                    <div className={OrderConfirmationCSS.info}>
                        <p><span>Date:</span> {session?.date}</p>
                        <p><span>Time: </span>  {session?.time}</p>
                </div>
                </div>
            ))}
        
        </div>
        </div>
    )
}

export default OrderConfirmation;