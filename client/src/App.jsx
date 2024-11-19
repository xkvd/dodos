import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");


  useEffect(() => {
    async function getTodos() {
      const response = await fetch("/api/router");
      const todos = await response.json();

      setMessage(todos.msg);
    }
    getTodos();
  }, [])

  return (
    <main className="container">
      <h1>Hello world!</h1>
      {message && <p>{message}</p>}
    </main>
  );
}