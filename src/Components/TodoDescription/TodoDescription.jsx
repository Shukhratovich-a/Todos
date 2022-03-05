import "./TodoDescription.scss";

function TodoDescription() {
  const todoText = "Lorem ipsum dolor sit amet";
  return (
    <>
      <label className="todo__label" name="edit-todo" htmlFor="todo-input">
        {todoText}
      </label>

      <input
        className="todo__input"
        name="edit-todo"
        type="text"
        id="todo-input"
        defaultValue={todoText}
      />
    </>
  );
}

export default TodoDescription;
