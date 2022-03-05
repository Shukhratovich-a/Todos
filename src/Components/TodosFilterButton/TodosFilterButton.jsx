import PropTypes from "prop-types";
import "./TodosFilterButton.scss";

function TodosFilterButton({ text = "All", isActive = true }) {
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

TodosFilterButton.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

export default TodosFilterButton;
