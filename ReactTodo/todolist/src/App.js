import './App.css';
import { useState } from "react";

function App() {

  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState([]);

  const handleChange = (event)=>{
      setNewTask(event.target.value);
  }


  const addTask = ()=>{
    let arr = [...todoList, newTask]
    setTodoList(arr)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>addTask</button>
      </div>
      <div className="List">
        {todoList.map((task)=>{return <h1>{task}</h1>;})}
      </div>
    </div>
  );
}

export default App;
