import Todo from "../Todo/Todo";

function TodosList({ todos, setTodos, handleDelete, handleCheck }) {
  return (
    <ul className="todos__list">
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
    </ul>
  );
}

export default TodosList;
