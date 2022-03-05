import "./TodoDescription.scss";

function TodoDescription() {
  return (
    <>
      <label className="todo__label" name="edit-todo" htmlFor="todo-input">
        Todo text
      </label>

      <input
        className="todo__input"
        name="edit-todo"
        type="text"
        id="todo-input"
        value="Todo text"
      />
    </>
  );
}

export default TodoDescription;
