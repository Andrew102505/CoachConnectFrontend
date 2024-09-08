import {Link, useHistory} from 'react-router-dom';
import ListingService from '../../services/ListingService';
import PrivateLessonListCSS from './PrivateLessonList.module.css';
const PrivateLessonList = (props) => {

    const listings = props.listings;//note each listing in listings has a coach object associated with them
    const history = useHistory();
    function goToDetails(listing){
        history.push({pathname:'/listingdetails', state : {listing: listing}});
    }
    function deleteListing(listingId){
        ListingService.deleteListing(listingId).then(res => {
            console.log("Listing Deleted");
            history.push('/listings');
            props.reloadPage();
        }).catch(err=>{
            console.log(err);
          });
    }
    return (
        <div className={PrivateLessonListCSS.privatelistingslist}>
            {listings.filter(listing => listing.type === 'Private').map((listing)=>(
                <div className = {PrivateLessonListCSS.listingpreview} key = {listing.id} onClick={() => goToDetails(listing)}>{/**have to set event handlers equal to anonymous inner function if  arguments are being passed otherwise the function will be automatically fired when the component is mounted*/}
                    {/**<Link to = {`/listingsdetails/${listing.id}`}>*/}
                    <h2 className={PrivateLessonListCSS.title}>{listing.title}</h2>
                    <div className={PrivateLessonListCSS.info}>
                    <p><span>Coach:</span> {listing.coach.firstName} {listing.coach.lastName}</p>
                    <p><span>Area: </span>  {listing.location}</p>
                    <p><span>Location: </span> {listing.address}</p>
                    {sessionStorage.getItem('role')==='ADMIN' && <button onClick = {() => deleteListing(listing?.id)}>Delete</button>}
                 

                </div>
                </div>
            ))}
        </div>
    )
}

export default PrivateLessonList;