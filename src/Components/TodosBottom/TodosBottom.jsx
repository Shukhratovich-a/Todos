import React from "react";
import { TodosFilterButton, TodosClearButton } from "../TodosButton/TodosButton";

import "./TodosBottom.scss";

function TodosBottom({ countCompletedTodos, todos, setTodos }) {
  let [buttons, setActive] = React.useState([
    { buttonTitle: "All", isActive: true },
    { buttonTitle: "Active", isActive: false },
    { buttonTitle: "Completed", isActive: false },
  ]);

  return (
    <div className="todos__bottom">
      <div className="todos__bottom__inner">
        <span className="todos__bottom__text">{countCompletedTodos} tasks left</span>

        <ul className="todos__bottom__list">
          {buttons.map((button) => (
            <li key={button.buttonTitle} className="todos__bottom__item">
              <TodosFilterButton
                text={button.buttonTitle}
                isActive={button.isActive}
                buttons={buttons}
                setActive={setActive}
              />
            </li>
          ))}
          {/* <li className="todos__bottom__item">
            <TodosFilterButton text="All" isActive={isActive} setActive={setActive} />
          </li>

          <li className="todos__bottom__item">
            <TodosFilterButton text="Active" isActive={isActive} setActive={setActive} />
          </li>

          <li className="todos__bottom__item">
            <TodosFilterButton text="Completed" isActive={isActive} setActive={setActive} />
          </li> */}
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
