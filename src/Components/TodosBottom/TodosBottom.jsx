import { TodosFilterButton, TodosClearButton } from "../TodosButton/TodosButton";

import "./TodosBottom.scss";

function TodosBottom({ countCompletedTodos, todos, setTodos }) {
  return (
    <div className="todos__bottom">
      <div className="todos__bottom__inner">
        <span className="todos__bottom__text">{countCompletedTodos} tasks left</span>

        <ul className="todos__bottom__list">
          <li className="todos__bottom__item">
            <TodosFilterButton text="All" isActive={true} />
          </li>

          <li className="todos__bottom__item">
            <TodosFilterButton text="Active" isActive={false} />
          </li>

          <li className="todos__bottom__item">
            <TodosFilterButton text="Completed" isActive={false} />
          </li>
        </ul>

        <TodosClearButton
          text="Clear completed"
          countCompletedTodos={countCompletedTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default TodosBottom;
