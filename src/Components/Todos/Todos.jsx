import React from "react";
import PropTypes from "prop-types";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";
import TodosBottom from "../TodosBottom/TodosBottom";

import "./Todos.scss";

function Todos() {
  let [todos, setTodos] = React.useState(
    window.localStorage.getItem("todos") ? JSON.parse(window.localStorage.getItem("todos")) : []
  );

  const [buttonType, setButtonType] = React.useState("all");

  const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    localStorage.setItem("todos", JSON.stringify(filteredTodos));

    setTodos(filteredTodos);
  };

  const handleCheck = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;

    const foundTodo = todos.find((todo) => todo.id === todoId);

    foundTodo.isCompleted = !foundTodo.isCompleted;
    localStorage.setItem("todos", JSON.stringify([...todos]));

    setTodos([...todos]);
  };

  const checkAll = () => {
    if (countCompletedTodos === todos.length) {
      todos.forEach((todo) => (todo.isCompleted = false));
    } else {
      todos.forEach((todo) => (todo.isCompleted = true));
    }

    localStorage.setItem("todos", JSON.stringify([...todos]));

    setTodos([...todos]);
  };

  React.useEffect(() => {
    const filterTodosByType = (_todos, _type) => {
      if (_type === "all") {
        return todos;
      } else if (_type === "active") {
        return todos.filter((todo) => !todo.isCompleted);
      } else if (_type === "completed") {
        return todos.filter((todo) => todo.isCompleted);
      } else {
        return [];
      }
    };

    setTodos(filterTodosByType(todos, buttonType));
  }, [buttonType, todos]);

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
          buttonType={buttonType}
        />
        <TodosBottom
          countCompletedTodos={countCompletedTodos}
          todos={todos}
          setTodos={setTodos}
          setButtonType={setButtonType}
        />
      </div>

      <p className="todos__text">Double-click to edit a todo</p>
      <p className="todos__text">
        Created by{" "}
        <a href="https://github.com/Shukhratovich-a/todos-react" target="blank">
          Shukhratovich
        </a>
      </p>
    </section>
  );
}

Todos.propTypes = {
  hasTodo: PropTypes.bool,
};

export default Todos;
