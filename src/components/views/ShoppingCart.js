import ListingService from "../../services/ListingService";

//this is where we will list all of the items in the cart
const ShoppingCart = (props) => {
//create a function to delete a session from the cart
    
function getListing(listingId){
    console.log(listingId);
    ListingService.getListingById(listingId).then(res=>{
        console.log(res.data);
        return res.data;
    }).catch(err=>{
        console.log(err);
      });
}
return (
        <div className="shopping-cart-items">
            {props.cart?.map((session)=>(
                <div className="session-info" key = {session.id}>
                    <p>{getListing(session.listingId)?.title}</p>
                    <p>{session?.date}</p>
                    <p>{session?.time}</p>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart;
//ill add a button on the checkout page that signs the user up for all of the sessions in the cart since we don't have a paywall set up