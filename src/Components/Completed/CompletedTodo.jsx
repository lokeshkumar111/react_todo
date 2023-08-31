import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './CompletedTodo.module.css';
const CompletedTodo = () => {

  const[completedTodo, setCompletedTodo] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchCompletedData = async () => {
    try {
      const res = await axios.get(`https://places-59x7.onrender.com/todos?completed=true`);
      console.log(res.data);
      setCompletedTodo(res.data);
    }
    catch (error) {
      console.log('error while showing completed data');
    }
  };

  useEffect(()=>{
    fetchCompletedData();
  },[]);


  async function deleteTodo(id) {
    try {
      const res = await axios.delete(`https://places-59x7.onrender.com/todos/${id}`);
      console.log(res.data);
      setCompletedTodo(prevState => prevState.filter(todo => todo.id !== id));
    }
    catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  // Slider Function
  const starTodoSummary = document.querySelector(".completedContainer");
    
  const upScroll = () => {
    const newPosition = scrollPosition - 200;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
  }
  
  const downScroll = () => {
    const newPosition = scrollPosition + 200;
    setScrollPosition(newPosition > 500 ? 500 : newPosition);

  }
  window.upScroll = upScroll;
  window.downScroll = downScroll;

  return (
    <div className={styles.completedContainer}>
      <h1>Completed Todos</h1>
      <div className={styles.scrollableContainer}>
        {completedTodo.map((ele, i)=>(
          <div key={i} className={styles.completedContainerCard}>
            <p>{ele.title}</p>
            <button onClick={() => deleteTodo(ele.id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CompletedTodo
