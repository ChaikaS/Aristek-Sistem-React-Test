import "./toDoList.scss";

export default function ToDoList({ inputText }) {
  return (
    <div className="todo__conteiner">
      <ul className="todo__list">{inputText}</ul>
    </div>
  );
}
