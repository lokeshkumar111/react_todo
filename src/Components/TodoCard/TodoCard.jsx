import React, { useState } from 'react';
import styles from './TodoCard.module.css';
import axios from 'axios';
import {FaStar} from 'react-icons/fa';

const TodoCard = ({ ele, onDelete }) => {
  const [priority, setPriority] = useState(ele.priority);

  const handlePriority = async () => {
    try {
      // const newPriority = !priority ? 'high' : 'low';
      const newPriority = priority==='low' ? 'high' : 'low';
     
      const res = await axios.put(`http://localhost:5000/todos/${ele.id}`, {
        id:ele.id,
        title:ele.title,
        priority: newPriority,
        completed: ele.completed,
      });
      setPriority(!priority);
      console.log(res.data);
    } catch (error) {
      console.log('error while updating priority');
    }
  };

  const handleCompletedTodo = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/todos/${ele.id}`, {
        id:ele.id,
        title:ele.title,
        priority:ele.priority,
        completed: true,
      });
      onDelete(ele.id);
      console.log(res.data);
    } catch (error) {
      console.log('error while completing todo');
    }
  };

  const handleDeleteTodo=async()=>{
    try{
      const res = await axios.delete(`http://localhost:5000/todos/${ele.id}`);
      console.log(res.data);
      onDelete(ele.id);
    }
    catch(error){
      console.log("error while deleting todo items");
    }
  }

  return (
    <div className={styles.TodoCard}>
      <h4>{ele.title}</h4>
      <div className={styles.TodoCardButton}>
        {/* <button onClick={handlePriority}>{priority==='high'? "high" : "low"}</button> */}
        <button onClick={handlePriority}><FaStar data-icon="star" color={priority?'blue':'grey'} fontSize={'15px'}/></button>
        <button onClick={handleDeleteTodo}>Delete</button>
        <button onClick={handleCompletedTodo}>Completed</button>
      </div>
    </div>
  );
};

export default TodoCard;
