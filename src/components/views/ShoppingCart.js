import { useHistory } from "react-router-dom";
import ListingService from "../../services/ListingService";
import ShoppingCartCSS from './ShoppingCart.module.css';
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
function clearCart(){
    props.Clear();
}
return (
    <div>
        {props.cart.length>0 && <button onClick = {clearCart} className={ShoppingCartCSS.clearentirecart}>Clear Entire Cart</button>}
        <div className={ShoppingCartCSS.shoppingcartlist}>
            {props.cart?.map((session)=>(
                <div className={ShoppingCartCSS.sessionpreview} key = {session.id}>
                    <h2 className={ShoppingCartCSS.title}>{session?.name}</h2>
                    <div className={ShoppingCartCSS.info}>
                        <p><span>Date:</span> {session?.date}</p>
                        <p><span>Time: </span>  {session?.time}</p>
                        <button onClick = {() => removeSession(session.id)}>Remove from Cart</button>
                    </div>
                   
                </div>
            ))}
            </div>
            {props.cart?.length>0 && <button onClick = {checkout}>Checkout</button>}
            {props.cart?.length==0 && <h2>Cart is Empty</h2>}
        </div>
    )
}

export default ShoppingCart;
//ill add a button on the checkout page that signs the user up for all of the sessions in the cart since we don't have a paywall set up