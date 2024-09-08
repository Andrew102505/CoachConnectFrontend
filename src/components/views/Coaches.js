import { useState } from "react";
import CoachService from "../../services/CoachService"
import CoachList from "./CoachList";
import CoachesCSS from './Coaches.module.css';
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
    function reloadPage(){
        window.location.reload();
    }
    return (
        <div className = {CoachesCSS.coaches}>
            <h1>Coaches</h1>
            {coaches && <CoachList coaches = {coaches} reloadPage = {reloadPage}/>}
        </div>
    )
}

export default Coaches;