import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";

export const Profile = ()=>{
    const {username} = useContext(AppContext)
    return (<div>
        <h1>THIS IS THE Profile PAGE of {username}</h1>
    </div>);
};