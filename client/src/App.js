import { useState, useEffect} from 'react';
import './assets/css/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/router")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, []);

  return (
    <main>
      <h1>Hello world!</h1>
      {todos.map((task) => (
        <div key={task._id}>
          <p>{task.task}</p>
          <p>{task.status ? <button>✅</button> : <button>⬜</button>}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
