import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";

function Todos() {
  return (
    <section className="todos">
      <TodosForm />
      <TodosList />
    </section>
  );
}

export default Todos;
