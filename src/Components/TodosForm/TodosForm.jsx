function TodosForm() {
  return (
    <form className="todos__form">
      <button className="todos__button" name="check-all" type="button"></button>
      <input className="todos__input" name="todo_text" type="text" autoComplete="off" />
      <button className="todos__form__button" name="add-todo" type="submit"></button>
    </form>
  );
}

export default TodosForm;
