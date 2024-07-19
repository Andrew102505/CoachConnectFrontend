import {useHistory} from 'react-router-dom';
const ClinicList = (props) => {

    const listings = props.listings;//note each listing in listings has a coach object associated with them
    const history = useHistory();
    function goToDetails(listing){
        history.push({pathname:'/listingdetails', state : {listing: listing}});
    }
    return (
        <div className="listings-list">
            {listings.filter(listing => listing.type === 'Clinic').map((listing)=>(
                <div className = "listing-preview" key = {listing.id} onClick={() => goToDetails(listing)}>{/**have to set event handlers equal to anonymous inner function if  arguments are being passed otherwise the function will be automatically fired when the component is mounted*/}
                    {/**<Link to = {`/listingsdetails/${listing.id}`}>*/}
                    
                    <h2>{listing.title}</h2>
                    <p>{listing.coach.firstName} {listing.coach.lastName}</p>
                    <p>{listing.location}</p>
                 

                </div>
                
            ))}
        </div>
    )
}

export default ClinicList;