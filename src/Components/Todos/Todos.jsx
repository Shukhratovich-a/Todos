import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";
import TodosBottom from "../TodosBottom/TodosBottom";

import "./Todos.scss";

function Todos() {
  return (
    <section className="todos">
      <div className="todos__inner">
        <TodosForm />
        <TodosList />
        <TodosBottom />
      </div>
    </section>
  );
}

export default Todos;
