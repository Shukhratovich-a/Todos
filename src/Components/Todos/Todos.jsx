import React from "react";
import PropTypes from "prop-types";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";
import TodosBottom from "../TodosBottom/TodosBottom";

import "./Todos.scss";

function Todos() {
  let [todos, setTodos] = React.useState(
    !window.localStorage.todos ? [] : JSON.parse(window.localStorage.getItem("todos"))
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(filteredTodos);
  };

  const handleCheck = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const foundTodo = todos.find((todo) => todo.id === todoId);

    foundTodo.isCompleted = !foundTodo.isCompleted;

    setTodos([...todos]);
  };

  const checkAll = () => {
    if (countCompletedTodos === todos.length) {
      todos.forEach((todo) => (todo.isCompleted = false));
    } else {
      todos.forEach((todo) => (todo.isCompleted = true));
    }

    setTodos([...todos]);
  };

  const countCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <section className={`todos ${todos.length ? "todos--active" : ""}`}>
      <div className="todos__inner">
        <TodosForm
          todos={todos}
          setTodos={setTodos}
          checkAll={checkAll}
          countCompletedTodos={countCompletedTodos}
        />
        <TodosList
          todos={todos}
          setTodos={setTodos}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
        <TodosBottom countCompletedTodos={countCompletedTodos} todos={todos} setTodos={setTodos} />
      </div>

      <span></span>
    </section>
  );
}

Todos.propTypes = {
  hasTodo: PropTypes.bool,
};

export default Todos;
