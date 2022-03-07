import "./TodoDeleteButton.scss";

function TodoDeleteButton({ todoId, handleDelete }) {
  return <button className="todo__button" data-todo-id={todoId} onClick={handleDelete}></button>;
}

export default TodoDeleteButton;
