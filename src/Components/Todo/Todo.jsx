import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import TodoDescription from "../TodoDescription/TodoDescription";
import TodoDeleteButton from "../TodoDeleteButton/TodoDeleteButton";

import "./Todo.scss";

function Todo({ todo, handleDelete, handleCheck }) {
  return (
    <li className={`todo ${todo.isCompleted ? "todo--completed" : ""}`}>
      <TodoCheckbox todo={todo} handleCheck={handleCheck} />

      <TodoDescription todo={todo} />

      <TodoDeleteButton todoId={todo.id} handleDelete={handleDelete} />
    </li>
  );
}

export default Todo;
