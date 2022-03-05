import "./TodoCheckbox.scss";

function TodoCheckbox() {
  return (
    <label className="todo__checkbox">
      <input className="todo__checkbox__input visually-hidden" type="checkbox" />
      <span className="todo__checkbox__controller"></span>
    </label>
  );
}

export default TodoCheckbox;
