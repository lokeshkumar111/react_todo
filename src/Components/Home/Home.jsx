import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <h1>Hello, Welcome to the MyTodo Appllication</h1>
        <h4>Here, You can find the best way to manage your tasks</h4>
        <p>Let's Start your Todo journey click on the below button or add your first task</p>
        <Link to="/addtodo"><button>Add Todo</button></Link>
    </div>
  )
}

export default Home
