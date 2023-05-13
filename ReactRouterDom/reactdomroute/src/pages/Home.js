import { ChangeProfile } from "../components/ChangeProfile";
export const Home = (props)=>{
    return (<div>
        <h1>THIS IS THE HOME PAGE and the user is {props.username} </h1>
        <ChangeProfile setUsername={props.setUsername}/>
    </div>);
};