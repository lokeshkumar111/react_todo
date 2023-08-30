import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './CompletedTodo.module.css';
const CompletedTodo = () => {

  const[completedTodo, setCompletedTodo] = useState([]);

  const fetchCompletedData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/todos?completed=true`);
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
      const res = await axios.delete(`http://localhost:5000/todos/${id}`);
      console.log(res.data);
      setCompletedTodo(prevState => prevState.filter(todo => todo.id !== id));
    }
    catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
    <div className={styles.completedContainer}>
      <h1>Completed Todos</h1>
      {completedTodo.map((ele, i)=>(
        <div key={i} className={styles.completedContainerCard}>
          <p>{ele.title}</p>
          <button onClick={() => deleteTodo(ele.id)}>Delete</button>
          </div>
      ))}
    </div>
  )
}

export default CompletedTodo
