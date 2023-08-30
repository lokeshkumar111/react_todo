import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoCard from '../TodoCard/TodoCard';
import styles from './TodoList.module.css';
const TodoList = () => {
    const[todo, setTodo] = useState([]);

    const url = `http://localhost:5000/todos?completed=false`;

    const fetchTodo=async()=>{
        const res = await axios.get(url);
        console.log(res.data);
        setTodo(res.data);
    }

    useEffect(()=>{
        fetchTodo();
    },[]);

    const handleDelete = (deletedTodoId) => {
    setTodo(todo.filter((ele) => ele.id !== deletedTodoId));
    };

  return (
    <div className={styles.TodoListContainer}>
      <h1>Todo List</h1>
      {todo.map((ele,idx)=>(<TodoCard key={idx} ele={ele} onDelete={handleDelete}/>))}
    </div>
  )
}

export default TodoList
