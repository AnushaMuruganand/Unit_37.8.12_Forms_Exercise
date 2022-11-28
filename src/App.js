import logo from './logo.svg';
import './App.css';
import BoxList from "./Color-Box-Maker/BoxList";
import TodoList from "./Todo-App/TodoList";

function App() {
  return (
    <div className="App">
      <BoxList />
      
      <TodoList/>
    </div>
  );
}

export default App;
