import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {

  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
 
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
        <h3><Link to="/addtodo">Add Todo +</Link></h3>
        <h3><Link to="/completedtodo">Completed</Link></h3>
        {isAuthenticated && (<p className={styles.userName}>{user.name}</p>)}
        {isAuthenticated ? (
           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out</button>
        ):(
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        </div>
        <h1 className={styles.logo}>My Todo</h1>
      </div>
    </div>
  )
}

export default Navbar
