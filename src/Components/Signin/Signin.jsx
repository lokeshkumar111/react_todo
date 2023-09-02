import React from 'react'
import styles from './Signin.module.css';
import googlePic from '../images/google.png';
import facePic from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import { useState } from 'react';
const Signin = () => {

  const[switchToSignUp, setSwitchToSignUp] = useState(false);

  const handleSwitchToSignUp = () => {
    setSwitchToSignUp(!switchToSignUp);
  }
  return (
    <div className={styles.loginSigninDiv}>
      {}
      <div>
        <h3 >Login</h3>
        <h3 onClick={handleSwitchToSignUp}>Signup</h3>
      </div>
      <div className={styles.SignInDiv}>
        <div>
          <lable>Email</lable>
          <br/>
          <input placeholder='Enter Email'></input>
          <br/>
          <br/>
          <lable>Password</lable>
          <br/>
          <input placeholder='Enter Password'></input>
        </div>
        <button>Continue</button>
        <p>Don't have an account?<span>signup</span></p>
        <div className={styles.otherMethods}>
          <img src={googlePic} alt="google"/>
          <img src={facePic} alt="facebook"/>
          <img src={linkedin} alt="linkedin"/>
        </div>
      </div>
    </div>
  )
}

export default Signin
