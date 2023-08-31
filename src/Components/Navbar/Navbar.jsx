import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = ({handlePopUpAddTodo}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <input type="checkbox" name="" id=""/>
        <div className={styles.hamburgerLines}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
        </div>
        <div className={styles.menuItems}>
        <h3><Link to="/favourites">Favourites</Link></h3>
        <h3><Link to="/todolist">Todo List</Link></h3>
        <h3><Link to="/addtodo" onClick={handlePopUpAddTodo}>Add Todo +</Link></h3>
        <h3><Link to="/completedtodo">Completed</Link></h3>
        </div>
        <h1 className={styles.logo}>My Todo</h1>
      </div>
    </div>
  )
}

export default Navbar
