import React from "react";
import "./TodoCheckbox.scss";

function TodoCheckbox({ todo, handleCheck }) {
  return (
    <label className="todo__checkbox">
      <input
        className="todo__checkbox__input visually-hidden"
        type="checkbox"
        onClick={handleCheck}
        data-todo-id={todo.id}
        defaultChecked={todo.isCompleted}
      />
      <span className="todo__checkbox__controller"></span>
    </label>
  );
}

export default TodoCheckbox;
