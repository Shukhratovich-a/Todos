import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import TodoDescription from "../TodoDescription/TodoDescription";
import TodoDeleteButton from "../TodoDeleteButton/TodoDeleteButton";

import "./Todo.scss";

function Todo() {
  return (
    <li className="todo">
      <TodoCheckbox />

      <TodoDescription />

      <TodoDeleteButton />
    </li>
  );
}

export default Todo;
