import PropTypes from "prop-types";
import "./TodosButton.scss";

function TodosFilterButton({ text = "All", isActive = true, todos }) {
  const editText = text.toLowerCase().split(" ").join("-");

  return (
    <button
      className={`todos__bottom__button ${isActive ? "todos__bottom__button--active" : ""}`}
      type="button"
      name={editText}
    >
      {text}
    </button>
  );
}

function TodosClearButton({ text = "clear-completed", countCompletedTodos, todos, setTodos }) {
  const editText = text.toLowerCase().split(" ").join("-");

  const clearCompleted = () => {
    const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(unCompletedTodos);
  };

  return (
    <button
      className={`todos__bottom__button ${
        countCompletedTodos ? "todos__bottom__button--visible" : ""
      }`}
      type="button"
      name={editText}
      onClick={clearCompleted}
    >
      {text}
    </button>
  );
}

TodosFilterButton.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

export { TodosFilterButton, TodosClearButton };
