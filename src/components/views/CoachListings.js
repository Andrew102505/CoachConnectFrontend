//will contain all of a coaches listings that they own
const CoachListings = () => {
    const[fetched, setFetched] = useState(false);
    const[pending, setPending] = useState(true);
    const[listings, setListings] = useState(null);

    function getCoachListings(coachId){
        ListingService.getAllCoachListings(coachId).then(res=>{
            setListings(res.data);
            setFetched(true);
            setPending(false);
        })
    }
    if(fetched == false){
        getCoachListings(sessionStorage.getItem('userId'));
    }
    return(
        <div className="coach-listings">
            <h2>Available Listings</h2>
            {pending && <div>Loading...</div>}
            {listings && <CoachListingsList listings = {listings}/>}
        </div>
    )
}

export default CoachListngs;