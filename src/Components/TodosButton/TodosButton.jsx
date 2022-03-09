import PropTypes from "prop-types";
import "./TodosButton.scss";

function TodosFilterButton({
  text = "All",
  isActive,
  buttons,
  setActive,
  setButtonType,
}) {
  const editText = text.toLowerCase().split(" ").join("-");

  const filterTodos = (evt) => {
    buttons.forEach((button) => {
      if (button.buttonTitle.toLowerCase() === evt.target.name) {
        button.isActive = true;
        setButtonType(evt.target.name);
        console.log();
      } else button.isActive = false;
    });

    setActive([...buttons]);
  };

  return (
    <button
      className={`todos__bottom__button ${isActive ? "todos__bottom__button--active" : ""}`}
      type="button"
      name={editText}
      onClick={filterTodos}
    >
      {text}
    </button>
  );
}

function TodosClearButton({ text = "clear-completed", countCompletedTodos, todos, setTodos }) {
  const editText = text.toLowerCase().split(" ").join("-");

  const clearCompleted = () => {
    const unCompletedTodos = todos.filter((todo) => !todo.isCompleted);

    localStorage.setItem("todos", JSON.stringify(unCompletedTodos));

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
