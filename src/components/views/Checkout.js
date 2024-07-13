import CustomerService from "../../services/CustomerService";
import SessionService from "../../services/SessionService";
const Checkout = (props) => {
    const sessions = props.cart;//cart contains all the sessions the customer signed up for
    console.log("!!!!!!!!!!!!!!");
    console.log(props.user);
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
        })
        //sessions.forEach(session=> SessionService.addParticipantToSession(session.id, customer));
    }
    return(
        <div>
            <h2>Your Cart</h2>
            {props.cart?.map((session)=>(
                <div className="session-info" key = {session.id}>
                    <p>{session?.date}</p>
                    <p>{session?.time}</p>
                </div>
            ))}
            <h2>Paywall Here</h2>
            <button onClick = {purchase}>Purchase</button>
        </div>

    )
}

export default Checkout;