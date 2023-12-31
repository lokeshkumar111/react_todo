import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Addtodo from '../AddTodo/Addtodo'
import TodoList from '../TodoList/TodoList'
import Navbar from '../Navbar/Navbar';
import StarTodo from '../Star/StarTodo';
import CompletedTodo from '../Completed/CompletedTodo';
import Home from '../Home/Home';
const AllRoutes = () => {

  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/favourites' element={<StarTodo/>}></Route>
                <Route path='/addtodo' element={<Addtodo/>}></Route>
                <Route path='/todolist' element={<TodoList/>}></Route>
                <Route path='/completedtodo' element={<CompletedTodo/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes
