import React from 'react'
import { useState } from "react";
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
const Create = (props) => {
    const task=props.task;
    const setTask=props.setTask;
    const[useValue,setUserValue]=useState("");
   
    const submitHandler=(e)=>{
  e.preventDefault();
  const userTask={
    work:useValue,
    id:nanoid(),
  }
  setTask((previousData)=>[...previousData,userTask])
  console.log(task);
  setUserValue("");
  toast.success("Task added successfully!");
}
  return (
    <>
      <div className="left">
      <h2>Set <span>Reminders</span> for tasks</h2>
      <div className="inputDiv">
        <form onSubmit={submitHandler}>
        <input value={useValue}
        onChange={(e)=>{
          setUserValue(e.target.value);
        }} type="text" placeholder="Enter Your Task"/>
        <button>Create Todo</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Create