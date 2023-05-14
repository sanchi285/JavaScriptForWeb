import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";
import {useQuery} from "@tanstack/react-query"
import  Axios  from "axios";

export const Home = ()=>{

    const {username} = useContext(AppContext)
    const {setUsername} = useContext(AppContext)
    const {data, isLoading, isError, refetch} = useQuery(["cat"], ()=>{
            return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);   
    }); 

    if(isError){
        return <h1>Error.....</h1>
    }

    if(isLoading){
        return <h1>Loading .....</h1>
    }


    return (<div>
        <h1>THIS IS THE HOME PAGE and the user is {username} </h1>
        <br/>
        <p>{data?.fact}</p>
        <br/>
        <button onClick={refetch}>Upadate DATA</button>
        <br/>
        <ChangeProfile/>
    </div>);
};