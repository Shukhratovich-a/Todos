import TodosFilterButton from "../TodosFilterButton/TodosFilterButton";

import "./TodosBottom.scss";

function TodosBottom({ countCompletedTodos }) {
  let count = 0;
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

        <TodosFilterButton text="Clear completed" isActive={false} />
      </div>
    </div>
  );
}

export default TodosBottom;
