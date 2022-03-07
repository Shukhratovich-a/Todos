import "./TodoDescription.scss";

function TodoDescription({ todo }) {
  return (
    <>
      <label className="todo__label" name="edit-todo" htmlFor="todo-input">
        {todo.title}
      </label>

      <input
        className="todo__input"
        name="edit-todo"
        type="text"
        id="todo-input"
        defaultValue={todo.title}
      />
    </>
  );
}

export default TodoDescription;
