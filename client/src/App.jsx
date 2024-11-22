import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function App() {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("/api/router");
      const todos = await response.json();

      setTodos(todos);
    }
    getTodos();
  }, []);

  const createNewTodo = async (e) => {
    e.preventDefault();
    if (content.length > 3) {
      const response = await fetch("/api/router", {
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({todo: content }),
        method: "POST",
      });
      const newTodo = await response.json();

      setContent("");
      setTodos([...todos, newTodo]);
    };
  };

  return (
    <main className="container">
      <h1 className="title">Awesome Todos!</h1>
      <form className="form" onSubmit={createNewTodo}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter a new todo.."
          className="formInput"
          required
        />
        <button type="submit">Create</button>
      </form>
      <div className="todos">
        {(todos.length > 0) &&
          todos.map((todo) => (
            <Todo key={todo._id} todo={todo} setTodos={setTodos} />
          ))
        }
      </div>
    </main>
  );
}