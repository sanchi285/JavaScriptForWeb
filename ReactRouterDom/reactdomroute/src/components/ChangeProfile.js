import { useState } from "react";

export const ChangeProfile = (props)=>{

    const [newUserName, setNewUserName] = useState("");
    return (
        <div>
            <input onChange={(event)=>{setNewUserName(event.target.value)}}/>
            <button onClick={()=>{props.setUsername(newUserName)}}>Change User Name</button>
        </div>
    );

}