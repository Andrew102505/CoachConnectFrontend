import CustomerService from '../../services/CustomerService';
import SessionService from '../../services/SessionService';
import { useHistory } from 'react-router-dom';
import CheckoutCSS from './Checkout.module.css';
const Checkout = (props) => {
    const sessions = props.cart;//cart contains all the sessions the customer signed up for
    console.log("!!!!!!!!!!!!!!");
    console.log(props.user);
    const history = useHistory();
    //console.log(props.user.firstName);
    //console.log(props.user.id);
   /* const customer = CustomerService.getCustomerById(props.user.id).then(res=>{
        return res.data;
    })*/
    //if this doesn't work you just have to do it individually where you add a purchase button inside each session div and purchase each session in the cart individually
    function purchase(){
        //console.log(customer.firstName);
        CustomerService.getCustomerById(props.user.id).then(res=>{
            sessions.forEach(session=> SessionService.addParticipantToSession(session.id, res.data));
            props.Clear();
            history.push({pathname: '/orderconfirmation', state:{order:sessions}});
        })
        //sessions.forEach(session=> SessionService.addParticipantToSession(session.id, customer));
    }
   
    return(
        <div>
            <h2>Your Cart</h2>
            <div className={CheckoutCSS.checkoutlist}>
            {props.cart?.map((session)=>(
                <div className={CheckoutCSS.sessionpreview} key = {session.id}>
                   <h2 className={CheckoutCSS.title}>{session?.name}</h2>
                    <div className={CheckoutCSS.info}>
                        <p><span>Date:</span> {session?.date}</p>
                        <p><span>Time: </span>  {session?.time}</p>
                        
                    </div>
                    </div>
            ))}
            </div>
            <h2>Paywall Here</h2>
            {sessions.length>0 && <button onClick = {purchase}>Purchase</button>}
        </div>

    )
}

export default Checkout;