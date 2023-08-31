import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StarTodo.module.css';

const StarTodo = () => {
  const [starTodo, setStarTodo] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchstarData = async () => {
    try {
      const res = await axios.get('https://places-59x7.onrender.com/todos?priority=high&completed=false');
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
      const res = await axios.delete(`https://places-59x7.onrender.com/todos/${id}`);
      console.log(res.data);

      // Update the state to remove the deleted item
      setStarTodo(prevState => prevState.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }


      // Slider Function
      const starTodoSummary = document.querySelector(".starContainer");
    
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
    <div className={styles.starContainer}>
      <h1>Favourite Todos</h1>
      <div className={styles.scrollableContainer}>
        {starTodo.map((ele, i) => (
          <div className={styles.starContainerCard} key={i}>
            <h4>{ele.title}</h4>
            <button onClick={() => deleteTodo(ele.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarTodo;
