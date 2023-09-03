import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoCard from '../TodoCard/TodoCard';
import styles from './TodoList.module.css';
const TodoList = () => {
    const[todo, setTodo] = useState([]);

    const [scrollPosition, setScrollPosition] = useState(0);

    const url = `https://places-59x7.onrender.com/todos?completed=false`;

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


      // Slider Function
    const todoSummary = document.querySelector(".TodoListContainer");
    
    const upScroll = () => {
      const newPosition = scrollPosition - 200;
      setScrollPosition(newPosition < 0 ? 0 : newPosition);
    }
    
    const downScroll = () => {
      const newPosition = scrollPosition + 200;
      setScrollPosition(newPosition > 400 ? 400 : newPosition);
  
    }
    window.upScroll = upScroll;
    window.downScroll = downScroll;

  return (
      <div className={styles.TodoListContainer}>
        <h1>Todo List</h1>
        <div className={styles.scrollableContainer} style={{ transform: `translateY(-${scrollPosition}px)` }}>
          {todo.map((ele,idx)=>(<TodoCard key={idx} ele={ele} onDelete={handleDelete}/>))}
        </div>  
      </div>
  )
}

export default TodoList
