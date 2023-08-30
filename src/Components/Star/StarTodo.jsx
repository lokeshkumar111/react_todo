import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StarTodo.module.css';

const StarTodo = () => {
  const [starTodo, setStarTodo] = useState([]);

  const fetchstarData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/todos?priority=high&completed=false');
      console.log(res.data);
      setStarTodo(res.data);
    } catch (error) {
      console.log('Error while showing star data');
    }
  };

  useEffect(() => {
    fetchstarData();
  }, []);

  async function deleteTodo(id) {
    try {
      const res = await axios.delete(`http://localhost:5000/todos/${id}`);
      console.log(res.data);

      // Update the state to remove the deleted item
      setStarTodo(prevState => prevState.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
    <div className={styles.starContainer}>
      <h1>Favourite Todos</h1>
      {starTodo.map((ele, i) => (
        <div className={styles.starContainerCard} key={i}>
          <h4>{ele.title}</h4>
          <button onClick={() => deleteTodo(ele.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StarTodo;
