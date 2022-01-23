import './App.css';
import Addtodolist from './component/Addtodolist'
import Todolist from './component/Todolist'
import {useState} from 'react'
import {useSelector} from 'react-redux'
function App() {
  const [todos, setTodos] = useState([
    { text: "finish the checkpoint", id: 1, isDone: false },
    { text: "submit the chekpoint ", id: 2, isDone: false },
    { text: "read my book till i fall asleep ", id: 3, isDone: false },
  ]);
  const data = useSelector((state) => state.todos)
  if(data.length < todos.length) {
    setTodos(data)
  }
  return (
    <div className="App">
      <h1 className="baha">TO DO APP</h1>
       <Addtodolist />
       <Todolist todos={todos} />
    </div>
  );
}

export default App;
