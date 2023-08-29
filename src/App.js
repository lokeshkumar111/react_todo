import './App.css';
import AddTodo from './Components/AddTodo/Addtodo'
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddTodo/>
    </div>
  );
}

export default App;
