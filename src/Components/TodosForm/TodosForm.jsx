import "./TodosForm.scss";

function TodosForm({ todos, setTodos, checkAll, countCompletedTodos }) {
  const addTodo = (evt) => {
    if (!evt.target.value) return;

    if (evt.code === "Enter") {
      const newTodo = {
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: evt.target.value.trim(),
        isCompleted: false,
      };

      setTodos([...todos, newTodo]);

      evt.target.value = null;
    }
  };

  return (
    <form className="todos__form" onSubmit={(evt) => evt.preventDefault()}>
      <button
        className={`todos__button ${
          countCompletedTodos === todos.length ? "todos__button--checkall" : ""
        }`}
        name="check-all"
        type="button"
        onClick={checkAll}
      ></button>
      <input
        className="todos__input"
        name="todo_text"
        onKeyUp={addTodo}
        type="text"
        autoComplete="off"
        placeholder="What needs to be done"
      />
      <button className="todos__form__button" name="add-todo" type="submit"></button>
    </form>
  );
}

export default TodosForm;
