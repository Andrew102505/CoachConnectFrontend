import {useHistory} from 'react-router-dom';
import ClinicListCSS from './ClinicList.module.css';
import ListingService from '../../services/ListingService';

const ClinicList = (props) => {

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
        <div className={ClinicListCSS.cliniclistingslist}>
            {listings.filter(listing => listing.type === 'Clinic').map((listing)=>(
                <div className = {ClinicListCSS.listingpreview} key = {listing.id} onClick={() => goToDetails(listing)}>{/**have to set event handlers equal to anonymous inner function if  arguments are being passed otherwise the function will be automatically fired when the component is mounted*/}
                    {/**<Link to = {`/listingsdetails/${listing.id}`}>*/}
                    
                    <h2 className={ClinicListCSS.title}>{listing.title}</h2>
                    <div className={ClinicListCSS.info}>
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

export default ClinicList;