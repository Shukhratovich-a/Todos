import Todo from "../Todo/Todo";

function TodosList({ todos, handleDelete, handleCheck }) {
  return (
    <ul className="todos__list">
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck} />
        ))}
    </ul>
  );
}

export default TodosList;
