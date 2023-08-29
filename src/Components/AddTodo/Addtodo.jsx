import React from 'react'
import styles from './AddTodo.module.css';
const Addtodo = () => {
  return (
    <div className={styles.AddTodoContainer}>
      <form>
        <h2>Add Todo</h2>
        <hr style={{'color':'black'}}/>
        <div className={styles.title}>
            <lable>Title</lable>
            <input placeholder='Enter Todo'/>
        </div>
        <div className={styles.priority}>
        <lable>Priority: </lable>
            <div>
                <input type="checkbox"  name="high" value="high"/>
                <label for="vehicle1"> High</label>
                <input type="checkbox"  name="low" value="low"/>
                <label for="vehicle2"> Low</label> 
            </div>
        </div>
        <br/>
        <button>Add</button>
        <br/>
        <br/>

      </form>
    </div>
  )
}

export default Addtodo
