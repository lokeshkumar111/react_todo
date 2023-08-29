import React from 'react'
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <h1>My Todo</h1>
      </div>
      <div className={styles.otherDiv}>
        <h3>Star *</h3>
        <h3>Todo List</h3>
        <h3>Add Todo +</h3>
        <h3>Delete</h3>
      </div>
    </div>
  )
}

export default Navbar
