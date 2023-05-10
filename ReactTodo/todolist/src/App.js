import './App.css';
import { useState } from "react";
import {Task} from './Task.js';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState([]);

  const handleChange = (event)=>{
      setNewTask(event.target.value);
  }

  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task)=>task.id!=id));
  }

  const addTask = ()=>{
    const task = {
      id: todoList.length==0 ? 1 : todoList[todoList.length-1].id+1,
      taskName: newTask
    }

    let arr = [...todoList, task]
    setTodoList(arr)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>addTask</button>
      </div>
      <div className="List">
        {todoList.map((task)=>{return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>})}
      </div>
    </div>
  );
}

export default App;
