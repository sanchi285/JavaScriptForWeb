
import { useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {

  const [name, setName] = useState()
  const [showdata, setShowData]=useState()

  const fetchData = ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setShowData(res.data)
    }
  );
  }


  return (
    <div className="App">
     <input placeholder="Ex. pedro" onChange={(event)=>{setName(event.target.value)}}/> 
     <button onClick={fetchData}>predictAge</button>
     <h1>{showdata?.name}</h1>
     <h1>{showdata?.age}</h1>
     <h1>{showdata?.count}</h1>
    </div>
  );
}

export default App;
