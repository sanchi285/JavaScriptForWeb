import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";

export const Home = ()=>{

    const {username} = useContext(AppContext)
    const {setUsername} = useContext(AppContext)

    return (<div>
        <h1>THIS IS THE HOME PAGE and the user is {username} </h1>
        <ChangeProfile/>
    </div>);
};