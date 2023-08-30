import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Addtodo from '../AddTodo/Addtodo'
import TodoList from '../TodoList/TodoList'
import Navbar from '../Navbar/Navbar';
import StarTodo from '../Star/StarTodo';
import CompletedTodo from '../Completed/CompletedTodo';
const AllRoutes = () => {

    const[popUpAddTodo, setPopUpAddTodo] = useState(false);

    const handlePopUpAddTodo =()=>{
        setPopUpAddTodo(!popUpAddTodo);
        console.log(popUpAddTodo);
    }
  return (
    <div>
      <BrowserRouter>
            <Navbar handlePopUpAddTodo={handlePopUpAddTodo}/>
            <Routes>
                <Route path='/favourites' element={<StarTodo/>}></Route>
                <Route path='/addtodo' element={<Addtodo/>}></Route>
                <Route path='/todolist' element={<TodoList handlePopUpAddTodo={handlePopUpAddTodo}/>}></Route>
                <Route path='/completedtodo' element={<CompletedTodo/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes
