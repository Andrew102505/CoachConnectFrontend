import { useState } from "react";
import CoachService from "../../services/CoachService"
import CoachList from "./CoachList";
const Coaches = () => {

    //need to use a method that will all coaches from the db
    //users do not need to be authenticated in order to use this
    const[coaches, setCoaches] = useState(null);
    const[fetched, setFetched] = useState(false);
    
    const getCoaches = () => {
        CoachService.getAllCoaches().then(res=>{
            let arr = res.data;
            setCoaches(arr);
            setFetched(true);
          }).catch(err=>{
            console.log(err);
          });
    }
    
    if(fetched === false){
        getCoaches();
    }
    return (
        <div className = "Coaches">
            <h2>Coaches</h2>
            {coaches && <CoachList coaches = {coaches}/>}
        </div>
    )
}

export default Coaches;