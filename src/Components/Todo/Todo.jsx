import React from "react";

import TodoCheckbox from "../TodoCheckbox/TodoCheckbox";
import TodoDescription from "../TodoDescription/TodoDescription";
import TodoDeleteButton from "../TodoDeleteButton/TodoDeleteButton";

import "./Todo.scss";

function Todo({ todo, todos, setTodos, handleDelete, handleCheck }) {
  let [isActive, setActive] = React.useState(false);

  return (
    <li
      className={`todo ${todo.isCompleted ? "todo--completed" : ""} ${
        isActive ? "todo--editing" : ""
      } `}
    >
      <TodoCheckbox todo={todo} handleCheck={handleCheck} />

      <TodoDescription
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        isActive={isActive}
        setActive={setActive}
      />

      <TodoDeleteButton todoId={todo.id} handleDelete={handleDelete} />
    </li>
  );
}

export default Todo;
