export default function Todo(props) {
    let { todo, setTodos } = props;

    const updateTodo = async(todoId, todoStatus) => {
        const response = await fetch(`/api/router/${todoId}`, {
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ status: todoStatus }),
            method: "PUT",
        });

        const json = await response.json();
        if (json.acknowledged) {
            setTodos(currentTodos => {
                return currentTodos.map((currentTodo) => {
                    if (currentTodo._id === todoId) {
                        return { ...currentTodo, status: !currentTodo.status };
                    }
                    return currentTodo;
                })
            })
        }
    };

    const deleteTodo = async(todoId) => {
        const response = await fetch(`/api/router/${todoId}`, {
            method: "DELETE",
        });

        const json = await response.json()
        if (json.acknowledged) {
            setTodos( currentTodos => {
                return currentTodos
                .filter((currentTodos) => (currentTodos._id !== todoId));
            })
        }
    }

    return (
        <div className="todo">
            <p>{todo.todo}</p>
            <div className="actions">
                <button
                    className="todoStatus"
                    onClick={() => updateTodo(todo._id, todo.status)}
                >
                    {(todo.status) ? "✅" : "⬜"}
                </button>
                <button
                    className="todoDelete"
                    onClick={() => deleteTodo(todo._id)}
                >
                    🗑️
                </button>
            </div>
        </div>
    )
}