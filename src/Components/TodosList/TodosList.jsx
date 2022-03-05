import Todo from "../Todo/Todo";

function TodosList() {
  return (
    <ul className="todos__list">
      <Todo />
      <Todo />
    </ul>
  );
}

export default TodosList;
