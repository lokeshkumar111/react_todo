import React from 'react'
import styles from './AddTodo.module.css';
import { useState } from 'react';
import axios from 'axios';
const Addtodo = ({handlePopUpAddTodo}) => {

  const[text, setText] = useState('');

  const handleText=(event)=>{
    setText(event.target.value);
  }

  const SetAddTodo=async()=>{
      try{
        const res = axios.post(`http://localhost:5000/todos`,{title:text});
        console.log("post new todo")
        handlePopUpAddTodo();
      }
      catch(error){
        console.log("error while posting todo")
      }
  }
  return (
    <div className={styles.AddTodoContainer}>
      <form>
        <h1>Add Todo</h1>
        <input placeholder='Enter Todo' onChange={handleText} required/>
        <br/>
        <button onClick={SetAddTodo} disabled={text.length<=1}>Add</button>
        <br/>
      </form>
    </div>
  )
}

export default Addtodo
