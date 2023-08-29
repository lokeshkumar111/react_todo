import './App.css';
import AddTodo from './Components/AddTodo/Addtodo'
import Navbar from './Components/Navbar/Navbar';
import TodoList from './Components/TodoList/TodoList';
import AllRoutes from './Components/Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
