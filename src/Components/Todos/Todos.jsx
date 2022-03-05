import PropTypes from "prop-types";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";
import TodosBottom from "../TodosBottom/TodosBottom";

import "./Todos.scss";

function Todos({ hasTodo = false }) {
  return (
    <section className={`todos ${hasTodo ? "todos--active" : ""}`}>
      <div className="todos__inner">
        <TodosForm />
        <TodosList />
        <TodosBottom />
      </div>
    </section>
  );
}

Todos.propTypes = {
  hasTodo: PropTypes.bool,
};

export default Todos;
