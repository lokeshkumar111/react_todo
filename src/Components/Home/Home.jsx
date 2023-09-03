import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
    {isAuthenticated ? (
      <div className={styles.homeContainer}>
      <h1>Hello, Welcome to MyTodo Appllication</h1>
      <h4>Here, You will find the best way to manage your tasks</h4>
      <p>Add New Todo</p>
      <Link to="/addtodo"><button>Add Todo</button></Link>
  </div>
    ):(
      <div className={styles.homeContainer}>
          <h1>Hello, Welcome to MyTodo Appllication</h1>
          <h4>Here, You will find the best way to manage your tasks</h4>
          <p>Let's Start your Todo journey just click on the below button to add your first todo task</p>
          <button onClick={() => loginWithRedirect()}>Add Todo</button>
      </div>
    )}
    </div>
  )
}

export default Home
