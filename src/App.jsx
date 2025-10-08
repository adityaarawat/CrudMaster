import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Create from "./components/Create";
import Read from "./components/Read";

const App=()=>{

   const [task, setTask] = useState(() => {
    // Get tasks from localStorage if available
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);


  return <>
    <h1>Todo Application</h1>
    <div className="container">
    <Create task={task} setTask={setTask}/>
    <Read task={task} setTask={setTask}/>
    </div>
   
  </>
}

export default App;