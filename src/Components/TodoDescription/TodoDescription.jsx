import "./TodoDescription.scss";

function TodoDescription({ todo, todos, setTodos, isActive, setActive }) {
  const editTodo = () => {
    setActive(!isActive);
  };

  const closeEditing = (evt) => {
    if (evt.code === "Enter") {
      setActive(false);
      todo.title = evt.target.value.trim();
      localStorage.setItem("todos", JSON.stringify([...todos]));
      setTodos([...todos]);
    }
  };

  return (
    <>
      <label className="todo__label" name="edit-todo" htmlFor="todo-input" onDoubleClick={editTodo}>
        {todo.title}
      </label>

      <input
        className="todo__input"
        id="todo-input"
        type="text"
        name="edit-todo"
        spellCheck="false"
        defaultValue={todo.title}
        onKeyUp={closeEditing}
      />
    </>
  );
}

export default TodoDescription;
