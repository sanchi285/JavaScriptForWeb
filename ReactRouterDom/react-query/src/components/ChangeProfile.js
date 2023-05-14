import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";


export const ChangeProfile = ()=>{

    const [newUserName, setNewUserName] = useState("");
    const {setUsername} = useContext(AppContext)

    return (
        <div>
            <input onChange={(event)=>{setNewUserName(event.target.value)}}/>
            <button onClick={()=>{setUsername(newUserName)}}>Change User Name</button>
        </div>
    );

}