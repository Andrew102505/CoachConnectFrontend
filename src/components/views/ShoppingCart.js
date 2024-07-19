import { useHistory } from "react-router-dom";
import ListingService from "../../services/ListingService";

//this is where we will list all of the items in the cart
const ShoppingCart = (props) => {
//create a function to delete a session from the cart
const history = useHistory();
if(sessionStorage.getItem('role') !== 'CUSTOMER'){
    history.push('/privateaccess');
}

function checkout(){
    history.push('/checkout');
}
function removeSession(sessionId){
    let cart =  JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((x)=> x.id !== sessionId);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}
return (
        <div className="shopping-cart-items">
            {props.cart?.map((session)=>(
                <div className="session-info" key = {session.id}>
                    <p>{session?.title}</p>
                    <p>{session?.name} || {session?.date}</p>
                    <p>Time: {session?.time}</p>
                    <button onClick = {() => removeSession(session.id)}>Remove from Cart</button>
                </div>
            ))}
            <button onClick = {checkout}>Checkout</button>
        </div>
    )
}

export default ShoppingCart;
//ill add a button on the checkout page that signs the user up for all of the sessions in the cart since we don't have a paywall set up