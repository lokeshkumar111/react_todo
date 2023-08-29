import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = ({handlePopUpAddTodo}) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <h1>My Todo</h1>
      </div>
      <div className={styles.otherDiv}>
        <h3>Star *</h3>
        <h3><Link to="/todolist">Todo List</Link></h3>
        <h3><Link to="/addtodo" onClick={handlePopUpAddTodo}>Add Todo +</Link></h3>
        <h3>Delete</h3>
      </div>
    </div>
  )
}

export default Navbar
